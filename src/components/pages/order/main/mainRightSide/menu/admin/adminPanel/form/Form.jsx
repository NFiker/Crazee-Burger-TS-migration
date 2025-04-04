import styled from "styled-components";
import React, { forwardRef } from "react";
import { theme } from "@/theme/theme.ts";
import TextInput from "@/components/reusable-ui/TextInput.tsx";
import Button from "@/components/reusable-ui/Button.tsx";
import ImagePreview from "./ImagePreview.jsx";
import SubmitMessage from "../addForm/SubmitMessage.jsx";
import { EMPTY_PRODUCT } from "@/constants/product.ts";
import SelectInput from "@/components/reusable-ui/SelectInput.tsx";
import { Inputs } from "./Inputs.jsx";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    //State (vide)

    //Comportements (vide)

    //Affichage
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview title={product.title} imageSource={product.imageSource} />
        <Inputs
          product={product}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "image-preview   input-fields"
    "image-preview   input-fields"
    "image-preview   input-fields"
    ".               submit-button";

  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .title {
    grid-column: span 3;
  }

  .image-source {
    grid-column: span 3;
  }

  .form-footer {
    grid-area: submit-button;
    display: flex;
    align-items: center;
  }
`;
