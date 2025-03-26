import { useState } from "react";

export const useSuccessMessage = () => {
  // State
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Comportements
  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return { isSubmitted, displaySuccessMessage };
};
