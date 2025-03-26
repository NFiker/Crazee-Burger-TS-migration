import { styled } from "styled-components";
import { theme } from "../../../../../../../theme/index";
import AdminTabs from "../admin/AdminTabs";
import AdminPanel from "./adminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { fadeInFromBottom } from "../../../../../../../theme/animations";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2; // for hide Scrollbar
  bottom: 0;
  left: 0;
  right: 0;

  animation: ${fadeInFromBottom} ease-out ${theme.animations.speed.quick};
`;
