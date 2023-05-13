import styled from "styled-components";

export const LoginContainer = styled.div`
  .forgot-link {
    text-decoration: none;
  }

  .forgot-link:hover {
    text-decoration: underline;
  }

  .btn-login {
    width: 122px;
    height: 66px;
    color: #fff;
    background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
    border-radius: 25px;
  }

  .btn-login:hover {
    box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  }

  #typeEmailX-2,
  #typePasswordX-2 {
    box-sizing: border-box;
    height: 67px;
    background: #2f2f43;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 18px;
    color: #fff;
  }
`;
