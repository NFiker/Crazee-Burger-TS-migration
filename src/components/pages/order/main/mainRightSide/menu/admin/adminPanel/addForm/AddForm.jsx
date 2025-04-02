import { useOrderContext } from "@/context/OrderContext";

import { useContext, useState } from "react";
import { EMPTY_PRODUCT } from "@/constants/product.ts";
import Form from "../form/Form.jsx";
import Button from "@/components//reusable-ui/Button.tsx";
import SubmitMessage from "./SubmitMessage.jsx";
import SubmitButton from "./SubmitButton.jsx";
import { useSuccessMessage } from "@/hooks/useSuccessMessage.ts";
import { replaceFrenchCommaWithDot } from "@/utils/maths.ts";
export default function AddForm() {
  //State
  const { username, handleAdd, newProduct, setNewProduct } = useOrderContext();
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  //Comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };

    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  //Affichage
  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    >
      <SubmitButton isSubmitted={isSubmitted} />
      {/* <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </> */}
    </Form>
  );
}
