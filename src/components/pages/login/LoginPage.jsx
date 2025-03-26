import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className="logo-login-page" />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url("/images/burger-and-fries-background.webp") center/cover no-repeat fixed;

  .logo-login-page {
    transform: scale(2.5);
  }
`;
