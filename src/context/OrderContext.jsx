import { createContext, useContext, useState, useRef } from "react";
import { useMenu } from "@/hooks/useMenu.ts";
import { useBasket } from "@/hooks/useBasket.ts";
import { findObjectById } from "@/utils/array.ts";
import { EMPTY_PRODUCT } from "@/constants/product.ts";

// 1. Création du contexte
const OrderContext = createContext({
  username: "",
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  resetMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},
  handleProductSelected: () => {},

  titleEditRef: {},

  basket: [],
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},
});

export default OrderContext;

// 2. Installation du contexte (provider)
export const OrderContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();

  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };
  const orderContextValue = {
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
    handleProductSelected,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
};

// 3. Consommation du contexte (custom hooks)
export const useOrderContext = () => useContext(OrderContext);
