import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "../components/layout/public/PublicLayout";
import Login from "../components/user/Login";
import ErrorPage from "../components/errors/Error";
import PrivateLayout from "../components/layout/general/PrivateLayout";
import Games from "../components/games/games";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
        <Route path="/match" element={<PrivateLayout />}>
          <Route index element={<Games />}></Route>
          <Route path="games" element={<Games />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
