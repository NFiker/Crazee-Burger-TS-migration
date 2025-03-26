import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { GiEternalLove } from "react-icons/gi";
import { BiSun } from "react-icons/bi";
import AddForm from "./addForm/AddForm.jsx";
import EditForm from "./editForm/EditForm.jsx";
import HintMessage from "./editForm/HintMessage.jsx";

export const getTabsConfig = (hasBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,

    // className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasBeenClicked ? <EditForm /> : <HintMessage />,

    // className: currentTabSelected === "edit" ? "is-active" : "",
  },
  // {
  //   index: "theme",
  //   label: "Changer thème",
  //   Icon: <BiSun />,
  //   // className: currentTabSelected === "edit" ? "is-active" : "",
  // },
  // {
  //   index: "babe",
  //   label: "Onglet de l'amouuur ",
  //   Icon: <GiEternalLove />,
  //   // className: currentTabSelected === "edit" ? "is-active" : "",
  // },
];

export const getTabsSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
