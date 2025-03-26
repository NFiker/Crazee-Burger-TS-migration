import styled from "styled-components";
import Tab from "../../../../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { theme } from "../../../../../../../theme";
import OrderPage from "../../../../OrderPage.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { getTabsConfig } from "./adminPanel/getTabsConfig.jsx";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

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
