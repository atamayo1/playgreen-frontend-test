import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 92%;
  height: 85px;
  margin: 1.1em;
  border-radius: 24px;
  position: fixed;
  background: #fff;
  .row {
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: 85px;
    border-radius: 12px;
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
