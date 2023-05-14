import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 92%;
  height: 85px;
  margin: 1em;
  background: #ffffff;
  border-radius: 24px;
  position: fixed;
  .row {
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: 85px;
    .col-4 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4em;
      height: 4em;
      :hover {
        background-color: #F5F5F5;
        border-radius: 16px;
      }
      svg {
        color: #777777;
      }
    }
  }
`;
