import React, { useContext } from "react";
import { isEmpty } from "@/utils/array";
import { useOrderContext } from "@/context/OrderContext";

import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function BasketBody() {
  const { menu, basket } = useOrderContext();
  return (
    <>
      {isEmpty(basket) ? (
        <EmptyBasket isLoading={menu === undefined} />
      ) : (
        <BasketProducts />
      )}
    </>
  );
}
