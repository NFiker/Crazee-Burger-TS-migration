import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketHeader from "./basketHeader/BasketHeader.jsx";
import BasketFooter from "./BasketFooter.jsx";
import BasketBody from "./basketBody/BasketBody.jsx";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .BasketFooter {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
