import styled from "styled-components";
import { theme } from "@/theme/theme.ts";
import { MdDeleteForever } from "react-icons/md";
import { IMAGE_COMING_SOON } from "@/constants/product";
import { css } from "styled-components";
import CasinoEffect from "@/components/reusable-ui/CasinoEffect.tsx";
import Sticker from "@/components/reusable-ui/Sticker";

type BasketCardProps = {
  title: string;
  price: string;
  quantity: number;
  imageSource: string;
  className?: string;
  isClickable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDelete?: React.MouseEventHandler<HTMLDivElement>;
  isSelected?: boolean;
  isPublicised?: boolean;
};

export default function BasketCard({
  title,
  price,
  quantity,
  imageSource,
  className,
  isClickable,
  onDelete,
  onClick,
  isSelected,
  isPublicised,
}: BasketCardProps) {
  return (
    <BasketCardStyled
      className={className}
      $isClickable={isClickable}
      onClick={onClick}
      $isSelected={isSelected}
    >
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource ? imageSource : IMAGE_COMING_SOON} alt={title} />
        {isPublicised && <Sticker className="badge-new" />}
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{price}</span>
        </div>
        <div className="quantity">
          <CasinoEffect count={`x ${quantity}`} />
        </div>
      </div>
    </BasketCardStyled>
  );
}

type BasketCardStyledProps = {
  $isClickable?: boolean;
  $isSelected?: boolean;
};

const BasketCardStyled = styled.div<BasketCardStyledProps>`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};

  box-sizing: border-box;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;

    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;

      .title {
        display: flex;
        align-items: center;
        font-family: ${theme.fonts.style.brandFont};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        font-weight: ${theme.fonts.weight.bold};
        color: ${theme.colors.dark};
        min-width: 0;

        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weight.medium};
        font-family: ${theme.fonts.style.uiFont};
      }
    }

    .quantity {
      box-sizing: border-box;
      font-weight: ${theme.fonts.weight.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${theme.fonts.size.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }

        &:active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }

  ${({ $isClickable, $isSelected }) =>
    $isClickable && $isSelected && selectedStyle}
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`;
