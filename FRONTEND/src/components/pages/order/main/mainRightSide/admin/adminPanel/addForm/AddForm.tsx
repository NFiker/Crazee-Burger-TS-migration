import { useOrderContext } from "@/context/OrderContext.tsx";
import { EMPTY_PRODUCT } from "@/constants/product.ts";
import Form from "../form/Form.tsx";
import SubmitButton from "./SubmitButton.js";
import { useSuccessMessage } from "@/hooks/useSuccessMessage.ts";
import {
  replaceFrenchCommaWithDot,
  sanitizeRawPriceInput,
} from "@/utils/maths.ts";
import { useParams } from "react-router-dom";
import { convertStringToBoolean } from "@/utils/string.ts";

export default function AddForm() {
  // State
  const { handleAdd, newProduct, setNewProduct } = useOrderContext();
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  const { username } = useParams();

  // Comportements
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) return;

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price), // clean le prix ici
    };

    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    let updatedValue: string | number | boolean = value;

    if (name === "price") {
      updatedValue = sanitizeRawPriceInput(value);
    }
    if (name === "isAvailable" || name === "isPublicised") {
      updatedValue = convertStringToBoolean(value);
    }

    const updatedProduct = { ...newProduct, [name]: updatedValue };
    setNewProduct(updatedProduct);
  };

  // Affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
