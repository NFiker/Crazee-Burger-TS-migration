import Button from "@/components/reusable-ui/Button.tsx";
import SubmitMessage from "./SubmitMessage.jsx";

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
