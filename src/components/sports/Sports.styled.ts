import styled from "styled-components";

export const SportsContainer = styled.div`
  img {
    width: auto;
    height: 564px;
    border-radius: 32px;
  }
  .container-title {
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 464px;
    background: linear-gradient(
      360deg,
      #000000 0%,
      #000000 58.85%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 0px 0px 32px 32px;
  }
  h5 {
    position: absolute;
    width: 116px;
    height: 48px;
    left: 21px;
    top: 25px;
    z-index: 2;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 122.02%;
    /* or 41px */
    display: flex;
    align-items: center;
    color: #fefefe;
  }
  .card {
    background: transparent;
  }
  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    background: #e5e5e5;
  }
  .btn-dontliked {
    width: 51px;
    height: 51px;
    background: #ffffff;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-liked {
    width: 51px;
    height: 51px;
    background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
    box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-liked:hover {
    width: 81px;
    height: 81px;
    color: white;
    .icon-size {
      width: 36px;
      height: 35px;
    }
  }
  .btn-dontliked:hover {
    width: 81px;
    height: 81px;
    color: #d36060;
    .icon-size {
      width: 36px;
      height: 35px;
    }
  }
`;

export const BtnMode = styled.div`
  position: absolute;
  width: 62px;
  height: 63px;
  left: 21px;
  top: 22px;
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 18px;
  .icon-mode {
    width: 51px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F3CC47;
    margin: 0.5em 0.2em;
  }
  :hover{
    box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
    cursor: pointer;
  }
`;
