import { theme } from "@/theme/theme.ts";
import styled from "styled-components";
import Header from "@/components/reusable-ui/Header.tsx";
import { formatPrice } from "@/utils/maths";
import { useOrderContext } from "@/context/OrderContext.tsx";

import { calculateSumToPay } from "./helper";
import CasinoEffect from "@/components/reusable-ui/CasinoEffect.tsx";
import { DEFAULT_SUM_TO_PAY } from "@/constants/product";

export default function Total() {
  const { basket, menu } = useOrderContext();
  const sumToPay = menu ? calculateSumToPay(basket, menu) : DEFAULT_SUM_TO_PAY;

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
