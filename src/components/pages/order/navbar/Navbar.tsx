import styled from "styled-components";
import NavLogin from "./NavLogin";
import Logo from "@/components/reusable-ui/Logo";
import { theme } from "@/theme/theme";
import { refreshPage } from "@/utils/window";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage} />
      <NavLogin />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
  }
`;
