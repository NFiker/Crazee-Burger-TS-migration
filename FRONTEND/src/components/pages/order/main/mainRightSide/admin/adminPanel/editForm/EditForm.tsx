import { useOrderContext } from "@/context/OrderContext.tsx";
import { useState } from "react";
import EditInfoMessage from "./EditInfoMessage.js";
import Form from "../form/Form.tsx";
import SavingMessage from "./SavingMessage.js";
import { useSuccessMessage } from "@/hooks/useSuccessMessage.ts";
import { useParams } from "react-router-dom";

export default function EditForm() {
  // State
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useOrderContext();

  const { username } = useParams();

  const [valueOnFocus, setValueOnFocus] = useState<string>();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  // Comportements
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    username && handleEdit(productBeingUpdated, username);
  };

  //Comportements
  const handleOnFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleOnBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) displaySuccessMessage();
  };

  // Affichage
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      ref={titleEditRef}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
}
