import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { GrUserAdmin } from "react-icons/gr";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import { theme } from "../../../../theme/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderContext from "../../../../context/OrderContext";

export default function Navlogin() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const notify = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <GrUserAdmin size={30} color={"#2B77AA"} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavLoginStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
        onToggle={notify}
      />
      <ToastAdmin />
      <Profile />
    </NavLoginStyled>
  );
}

const NavLoginStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 40px;
`;
