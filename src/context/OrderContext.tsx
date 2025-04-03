import {
  createContext,
  useContext,
  useState,
  useRef,
  PropsWithChildren,
} from "react";
import { useMenu } from "@/hooks/useMenu.ts";
import { useBasket } from "@/hooks/useBasket.ts";
import { findObjectById } from "@/utils/array.ts";
import { EMPTY_PRODUCT } from "@/constants/product.ts";
import { ADMIN_TAB_LABEL } from "@/constants/tab";

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
export const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState<ADMIN_TAB_LABEL>(
    ADMIN_TAB_LABEL.EDIT
  ); // Utiliser un union type AdminTabLabel = "chevron" | "add" | "edit" suffirait
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef<HTMLInputElement>(null); //On initie le state à null par usage
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();

  const handleProductSelected = async (idProductClicked: string) => {
    if (!menu) return;
    const productClickedOn = findObjectById(idProductClicked, menu);
    await setIsCollapsed(false);
    await setCurrentTabSelected(ADMIN_TAB_LABEL.EDIT);
    // if (!productClickedOn) return;
    productClickedOn && (await setProductSelected(productClickedOn));
    titleEditRef.current?.focus();
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
