import styled from "styled-components";
import { theme } from "@/theme/theme";
import Button from "@/components/reusable-ui/Button";

type EmptyMenuAdminProps = {
  onReset: () => void;
};

export default function EmptyMenuAdmin({ onReset }: EmptyMenuAdminProps) {
  return (
    <EmptyMenuAdminStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">
        Cliquez ci-dessous pour le réinitialiser
      </span>
      <Button
        label="Générer de nouveaux produits"
        onClick={onReset}
        version="normal"
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title,
  .description {
    text-align: center;
    font-family: ${theme.fonts.style.brandFont};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
  }

  .title {
    font-weight: ${theme.fonts.weight.semiBold};
  }

  .description {
    margin-top: 20px;
  }

  button {
    margin-top: 20px;
    width: auto;
  }
`;
