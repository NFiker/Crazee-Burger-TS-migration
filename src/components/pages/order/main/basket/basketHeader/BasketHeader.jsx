import React from "react";
import { theme } from "../../../../../../theme";
import styled from "styled-components";
import Header from "../../../../../reusable-ui/Header.jsx";
import { formatPrice } from "../../../../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { calculateSumToPay } from "./helper";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect.jsx";

export default function Total() {
  const { basket, menu } = useContext(OrderContext);
  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <BasketHeaderStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
      </BasketHeaderStyled>
    </Header>
  );
}

const BasketHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.style.brandFont};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weight.bold};
  letter-spacing: 2px;
`;
