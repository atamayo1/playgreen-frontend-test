import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavContainer } from "./Nav.styled";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../helpers/FirebaseConfig";

const Nav = () => {
  const navigate = useNavigate()
  const logout = async () => {
    auth.signOut().then((res) => {
      console.log("res signOut", res)
      sessionStorage.clear();
      navigate("/")
    }).catch((err) => {
      console.log("err", err.message)
    });
  };

  return (
    <NavContainer>
      <div className="row">
        <div className="col-4">
          <Link to={"/sports"}>
            <Tooltip title="Home">
              <HomeIcon></HomeIcon>
            </Tooltip>
          </Link>
        </div>
        <div className="col-4">
          <Link to={"/sports/history"}>
            <Tooltip title="History">
              <HistoryIcon></HistoryIcon>
            </Tooltip>
          </Link>
        </div>
        <div className="col-4">
          <Tooltip title="Sign Out" onClick={logout}>
            <LogoutIcon></LogoutIcon>
          </Tooltip>
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;
