import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  // State
  const [username, setUsername] = useState("NFiker");
  const navigate = useNavigate();

  //Comportements
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userReceived = await authenticateUser(username);

    setUsername("");
    navigate(`order/${userReceived.username}`);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  //Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />

        <Button label={"Accédez à mon espace"} Icon={<IoChevronForward />} />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: ${theme.fonts.style.brandFont};

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: 48px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 48px;
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0; //must be handled in parent
  }
`;
