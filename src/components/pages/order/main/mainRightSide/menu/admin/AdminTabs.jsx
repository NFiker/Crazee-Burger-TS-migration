import styled from "styled-components";
import Tab from "@/components/reusable-ui/Tab.tsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { theme } from "@/theme/theme.ts";
import OrderPage from "@/components/pages/order/OrderPage.tsx";
import { useContext } from "react";
import { useOrderContext } from "@/context/OrderContext.tsx";

import { getTabsConfig } from "./adminPanel/getTabsConfig.jsx";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useOrderContext();
  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // Ouvre le panel admin au click d'un tab
    setCurrentTabSelected(tabSelected); // réactualise l'onglet sélectionné
  };

  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        className={isCollapsed ? "is-active" : ""}
      />
      ;
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
