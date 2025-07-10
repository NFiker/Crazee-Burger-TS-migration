import styled from "styled-components";
import ImagePreview from "./ImagePreview.tsx";
import { Inputs, InputsProps } from "./Inputs.tsx";
import React from "react";

type FormProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
} & InputsProps;

const Form = React.forwardRef<HTMLInputElement, FormProps>(
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
