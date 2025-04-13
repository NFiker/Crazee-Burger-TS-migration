import { useOrderContext } from "@/context/OrderContext.tsx";
import { EMPTY_PRODUCT } from "@/constants/product.ts";
import Form from "../form/Form.tsx";
import SubmitButton from "./SubmitButton.js";
import { useSuccessMessage } from "@/hooks/useSuccessMessage.ts";
import { replaceFrenchCommaWithDot } from "@/utils/maths.ts";
import { useParams } from "react-router-dom";

export default function AddForm() {
  //State
  const { handleAdd, newProduct, setNewProduct } = useOrderContext();
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  const { username } = useParams();

  //Comportements
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) return;
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };
    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  //Affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
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
