import styled from "styled-components";

export const HistoryContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 83vh;
  .container-content {
    margin: 2em;
    color: ${({ theme }) => theme.colorPrincipal};
    .description {
      width: 70vw;
    }
  }
`;

export const BackButton = styled.div`
  margin: 2em;
  .icon-button {
    font-size: 2em;
    :hover {
      background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
      border-radius: 99px;
      color: white;
      cursor: pointer;
    }
  }
`;

export const HistoryList = styled.div`
  margin: 2em;
  .item-img {
    width: 100%;
    height: 100%;
    margin-left: -0.8em;
    margin-right: 1em;
    border-radius: 12px;
    background-size: cover;
    background-position: 100%;
  }
`;

export const ContainIcon = styled.div`
  left: 2em;
  width: 97%;
  height: 77px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    width: 34px;
    height: 34px;
    margin-right: 1vw;
  }
`;
