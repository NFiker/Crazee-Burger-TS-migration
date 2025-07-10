import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
//@ts-ignore
import AddForm from "./addForm/AddForm.js";
//@ts-ignore
import EditForm from "./editForm/EditForm.js";
//@ts-ignore
import HintMessage from "./editForm/HintMessage.js";
import { ADMIN_TAB_LABEL } from "@/constants/tab.ts";
import { TabType } from "@/types/Tab.ts";

export const getTabsConfig = (hasBeenClicked?: boolean): TabType[] => [
  {
    index: ADMIN_TAB_LABEL.ADD,
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: ADMIN_TAB_LABEL.EDIT,
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasBeenClicked ? <EditForm /> : <HintMessage />,
  },
];

export const getTabsSelected = (
  tabs: TabType[],
  currentTabSelected: ADMIN_TAB_LABEL
) => tabs.find((tab) => tab.index === currentTabSelected);
