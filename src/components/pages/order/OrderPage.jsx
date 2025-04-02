import styled from "styled-components";
import Main from "./main/Main";
import { theme } from "@/theme/index";
import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import { useOrderContext } from "@/context/OrderContext";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helpers/initialiseUserSession";

export default function OrderPage() {
  const {
    // username,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useOrderContext();

  const { username } = useParams();

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket);
  }, [username, setMenu, setBasket]);

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};

  .container {
    height: 95vh;
    margin: 0 1rem;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
