import styled from "styled-components";
import { theme } from "@/theme/theme.ts";
import { formatPrice } from "@/utils/maths.ts";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Card from "@/components/reusable-ui/Card.tsx";
import { useOrderContext } from "@/context/OrderContext.tsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "@/constants/product.ts";
import { isEmpty } from "@/utils/array.ts";
import Loader from "./Loader";
import { menuAnimation } from "@/theme/animations.ts";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { convertStringToBoolean } from "@/utils/string.ts";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated";
import { useParams } from "react-router-dom";

export default function Menu() {
  //State
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useOrderContext();

  const { username } = useParams();

  //comportements

  const handleCardDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idProductToDelete: string
  ) => {
    event.stopPropagation();
    if (username === undefined) return;
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);

    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idProductToAdd: string
  ) => {
    event.stopPropagation();
    username && handleAddToBasket(idProductToAdd, username);
  };

  let cardContainerClassName = isModeAdmin
    ? "card-container is-hoverable"
    : "card-container";

  //Affichage
  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    return isModeAdmin ? (
      username && <EmptyMenuAdmin onReset={() => resetMenu(username)} />
    ) : (
      <EmptyMenuClient />
    );
  }

  return (
    <SimpleBar>
      <TransitionGroup component={MenuStyled} className="menu">
        {menu.map(
          ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
            return (
              <CSSTransition classNames="menu-animation" key={id} timeout={500}>
                <div className={cardContainerClassName}>
                  {convertStringToBoolean(isPublicised) && <RibbonAnimated />}

                  <Card
                    title={title}
                    imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                    leftDescription={formatPrice(price)}
                    hasDeleteButton={isModeAdmin}
                    onDelete={(event) => handleCardDelete(event, id)}
                    onClick={
                      isModeAdmin ? () => handleProductSelected(id) : undefined
                    }
                    isHoverable={isModeAdmin}
                    isSelected={checkIfProductIsClicked(id, productSelected.id)}
                    onAdd={(event) => handleAddButton(event, id)}
                    overlapImageSource={IMAGE_NO_STOCK}
                    isOverlapImageVisible={
                      convertStringToBoolean(isAvailable) === false
                    }
                  />
                </div>
              </CSSTransition>
              // <Card {...card} /> non utilisable pour des reusable componenents
            );
          }
        )}
      </TransitionGroup>
    </SimpleBar>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  min-height: 85vh;
  height: 100%; //temporaire avant correction z-index: ;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  /* overflow-y: scroll; */

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px; //pour éviter une zone de click verticale étrange visible avec l'outil inspect
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`;
