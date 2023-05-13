import { useState } from "react";
import Global from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { LoginContainer } from "./Login.styled";

const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState<string>("not_sended");
  const [initTitle] = useState("Welcome");
  const [initDescription] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  );

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userToLogin = form;
    const request = await axios
      .post(Global.url + "user/login", {
        userToLogin,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    const data = await request;
    console.log(data);
    if (data.status == "success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setSaved("login");
    } else {
      setSaved("error");
    }
  };

  return (
    <>
      <LoginContainer>
        {saved == "login" ? (
          <div className="alert alert-success">
            Usuario identificado correctamente !!
          </div>
        ) : (
          ""
        )}
        {saved == "error" ? (
          <div className="alert alert-danger">
            Usuario no se ha identificado !!
          </div>
        ) : (
          ""
        )}
        <form onSubmit={loginUser}>
          <div className="container mt-5 py-5 h-100">
            <div className="row d-flex mt-5 justify-content-center align-items-center h-100">
              <div className="col-12 mt-4 col-md-8 col-lg-6 col-xl-5">
                <h1 className="text-center">{initTitle}</h1>
                <p className="text-center mx-5">{initDescription}</p>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    placeholder="email"
                    className="form-control form-control-lg"
                    onChange={changed}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    placeholder="password"
                    className="form-control form-control-lg"
                    onChange={changed}
                  />
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="forgot-link" href="#!">
                    Forgot password?
                  </a>
                </p>
                <input
                    type="submit"
                    value="Login"
                    className="btn btn-login"
                  />
              </div>
            </div>
          </div>
        </form>
      </LoginContainer>
    </>
  );
};

export default Login;
