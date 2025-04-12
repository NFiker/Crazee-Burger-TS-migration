import styled from "styled-components";
import { theme } from "@/theme/theme.ts";
import BasketHeader from "./basketHeader/BasketHeader.tsx";
import BasketFooter from "./BasketFooter.tsx";
import BasketBody from "./basketBody/BasketBody.tsx";

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
