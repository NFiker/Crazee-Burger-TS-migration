import Button from "@/components/reusable-ui/Button.tsx";
import SubmitMessage from "./SubmitMessage.js";

type SubmitButtonProps = {
  isSubmitted: boolean;
};
export default function SubmitButton({ isSubmitted }: SubmitButtonProps) {
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
