import styled from "styled-components";
import Header from "../../../../reusable-ui/Header";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <Header>
      <BasketFooterStyled>
        Codé avec <span className="heart">&hearts;</span> et React.js
      </BasketFooterStyled>
    </Header>
  );
}

const BasketFooterStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.style.brandFont};
  font-size: ${theme.fonts.size.P1};
  font-weight: ${theme.fonts.weight.bold};
  letter-spacing: 2px;

  .heart {
    color: red;
    font-size: ${theme.fonts.size.P2};
    padding: 5px;
  }
`;
