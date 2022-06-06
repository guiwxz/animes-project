import { useContext } from "react";

import { DescriptionModalContext } from "../descriptionModalProvider/descriptionModalProvider";

const useDescriptionModal = () => {
  const context = useContext(DescriptionModalContext);

  if (!context) {
    throw new Error(
      "useDescriptionModal() deve estar dentro de um <DescriptionModalContext />"
    );
  }

  return context;
};

export default useDescriptionModal;
