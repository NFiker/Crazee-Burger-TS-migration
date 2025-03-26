import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../../../theme";
import { fadeIn } from "../../../../../../../../../theme/animations";

export default function ImagePreview({ title, imageSource }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="empty-image">Aucune Image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: image-preview;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    animation: ${fadeIn} 1s;
  }

  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`;
