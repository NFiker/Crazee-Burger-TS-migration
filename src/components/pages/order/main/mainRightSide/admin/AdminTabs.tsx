import styled from "styled-components";
import Tab from "@/components/reusable-ui/Tab.tsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "@/theme/theme.ts";
import { useOrderContext } from "@/context/OrderContext.tsx";

import { getTabsConfig } from "./adminPanel/getTabsConfig";
import { ADMIN_TAB_LABEL } from "@/constants/tab.js";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useOrderContext();

  const selectTab = (tabSelected: ADMIN_TAB_LABEL) => {
    setIsCollapsed(false); // Ouvre le panel admin au click d'un tab
    setCurrentTabSelected(tabSelected); // réactualise l'onglet sélectionné
  };

  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      <Tab
        index={ADMIN_TAB_LABEL.CHEVRON}
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
          index={tab.index}
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
