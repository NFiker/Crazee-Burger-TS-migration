import styled from "styled-components";
import { theme } from "@/theme/theme.ts";
import { useOrderContext } from "@/context/OrderContext.tsx";
import { getTabsConfig, getTabsSelected } from "./getTabsConfig";
import { EMPTY_PRODUCT } from "@/constants/product.ts";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useOrderContext();
  const hasBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasBeenClicked);
  const tabSelected = getTabsSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 240px;
  padding: 30px 5%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
