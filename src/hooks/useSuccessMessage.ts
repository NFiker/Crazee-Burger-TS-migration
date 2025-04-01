import { useState } from "react";

export const useSuccessMessage = (timeDelay: number = 2000) => {
  //Typage explicité malgré l'inférence car un seul élément prouvant l'inférence (2000)
  // State
  const [isSubmitted, setIsSubmitted] = useState(false); //L'inférence suffit ici car deux éléments prouvent l'inférence (false + isSth)

  // Comportements
  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };

  return { isSubmitted, displaySuccessMessage };
};
