import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "../components/layout/public/PublicLayout";
import Login from "../components/user/Login";
import ErrorPage from "../components/errors/Error";
import PrivateLayout from "../components/layout/general/PrivateLayout";
import Sports from "../components/sports/Sports";
import History from "../components/history/History";
import { useEffect, useState } from "react";
import { auth } from "../helpers/FirebaseConfig";

const Routing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
        {isAuthenticated && (
          <Route path="/sports" element={<PrivateLayout />}>
            <Route index element={<Sports />}></Route>
            <Route path="history" element={<History />}></Route>
          </Route>
        )}

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
