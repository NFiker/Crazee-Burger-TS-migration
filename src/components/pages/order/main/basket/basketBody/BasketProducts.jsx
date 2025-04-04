import React from "react";
import styled from "styled-components";
import { findObjectById } from "@/utils/array.ts";
import { useContext } from "react";
import { useOrderContext } from "@/context/OrderContext.tsx";

import { BASKET_MESSAGE, IMAGE_COMING_SOON } from "@/constants/product";
import { checkIfProductClicked } from "../../mainRightSide/menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "@/theme/animations";
import BasketCard from "./BasketCard.jsx";
import { formatPrice } from "@/utils/maths";
import { convertStringToBoolean } from "@/utils/string";
import Sticker from "@/components/reusable-ui/Sticker.tsx";

export default function BasketProducts() {
  const {
    username,
    basket,
    menu,
    isModeAdmin,
    handleDeleteBasketProduct,
    handleProductSelected,
    productSelected,
  } = useOrderContext();
  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu);

          return (
            <CSSTransition
              appear={true}
              classNames={"animation-basket"}
              key={basketProduct.id}
              timeout={500}
            >
              <div className="card-container">
                {convertStringToBoolean(menuProduct.isPublicised) && (
                  <Sticker className="badge-new" />
                )}
                <BasketCard
                  {...menuProduct}
                  quantity={basketProduct.quantity}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_COMING_SOON
                  }
                  onDelete={() => handleOnDelete(event, basketProduct.id)}
                  isClickable={isModeAdmin}
                  onClick={
                    isModeAdmin
                      ? () => handleProductSelected(basketProduct.id)
                      : null
                  }
                  isSelected={checkIfProductClicked(
                    basketProduct.id,
                    productSelected.id
                  )}
                  className={"card"}
                  price={
                    convertStringToBoolean(menuProduct.isAvailable)
                      ? formatPrice(menuProduct.price)
                      : BASKET_MESSAGE.NOT_AVAILABLE
                  }
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .card-container {
    margin: 10px 16px;
    height: 86px;
    position: relative;

    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }
  ${basketAnimation};
`;
