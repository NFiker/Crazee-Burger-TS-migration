// import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../../../../context/OrderContext.js";
import { useState, useContext } from "react";
import styled from "styled-components";
import ImagePreview from "../form/ImagePreview.jsx";
import TextInput from "../../../../../../../../reusable-ui/TextInput.jsx";
import { theme } from "../../../../../../../../../theme/index.js";
import EditInfoMessage from "./EditInfoMessage.jsx";
import Form from "../form/Form.jsx";
import SavingMessage from "./SavingMessage.jsx";
import { useSuccessMessage } from "../../../../../../../../../hooks/useSuccessMessage.js";

export default function EditForm() {
  // State
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  // Comportements
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated, username);
  };

  //Comportements
  const handleOnFocus = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleOnBlur = (event) => {
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

const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "image-preview   input-fields"
    "image-preview   input-fields"
    "image-preview   input-fields"
    ".               submit-button";

  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: input-fields;
    display: grid;
    align-self: center;
    grid-row-gap: 5px;
  }

  .submit {
    grid-area: submit-button;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
