import { styled } from "styled-components";
import { theme } from "@/theme/theme.ts";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./adminPanel/AdminPanel";
import { useOrderContext } from "@/context/OrderContext.tsx";
import { fadeInFromBottom } from "@/theme/animations.ts";

export default function Admin() {
  const { isCollapsed } = useOrderContext();

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;

  animation: ${fadeInFromBottom} ease-out ${theme.animations.speed.quick};
`;
