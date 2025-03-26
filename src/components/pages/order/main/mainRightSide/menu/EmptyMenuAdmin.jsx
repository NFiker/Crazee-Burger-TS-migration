import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import Button from "../../../../../reusable-ui/Button";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">
        Cliquez ci-dessous pour le réinitialiser
      </span>
      <Button
        label="Générer de nouveaux produits"
        onClick={onReset}
        version="primary"
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  background-color: ${theme.colors.background_white}
  box-shadow: ${theme.shadows.strong},
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    .title, .description {
      text-align: center;
      font-family: ${theme.fonts.style.brandFont};
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.P4}
    }

    .title {
      font-weight: ${theme.fonts.weight.semiBold}
    }

    .description {
      margin-top: 20px;
    }

    button {
      margin-top: 20px;
      width: auto;
    }


`;
