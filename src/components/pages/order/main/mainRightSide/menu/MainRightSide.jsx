import Admin from "./admin/Admin.jsx";
import OrderContext from "../../../../../../context/OrderContext.js";
import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import Menu from "./Menu.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { adminAnimation } from "../../../../../../theme/animations.js";

export default function MainRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && (
        <TransitionGroup component={null} className="transition-group">
          <CSSTransition appear classNames="admin" timeout={500}>
            <Admin />
          </CSSTransition>
        </TransitionGroup>
      )}
    </MainRightSideStyled>
  );
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${adminAnimation}
`;
