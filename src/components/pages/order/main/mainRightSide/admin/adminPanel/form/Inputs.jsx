import React from "react";
import TextInput from "@/components/reusable-ui/TextInput.tsx";
import SelectInput from "@/components/reusable-ui/SelectInput.tsx";
import styled from "styled-components";
import {
  getInputTextsConfig,
  getInputSelectsConfig,
} from "./getInputConfig.tsx";

export const Inputs = React.forwardRef(
  ({ product, onChange, onFocus, onBlur }, ref) => {
    const inputTexts = getInputTextsConfig(product);
    const inputSelects = getInputSelectsConfig(product);

    return (
      <InputsStyled>
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            // name={input.name}
            // value={input.value}
            // placeholder={input.placeholder}
            // Icon={input.Icon}
            {...input}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            version="minimalist"
            className={input.className}
            ref={ref && input.name === "title" ? ref : null}
          />
        ))}
        {inputSelects.map((inputSelect) => (
          <SelectInput
            {...inputSelect}
            key={inputSelect.id}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
      </InputsStyled>
    );
  }
);

const InputsStyled = styled.div`
  /* grid-area: input-fields; */
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-self: center;
  grid-gap: 8px;
  grid-auto-flow: dense; /* Place intelligemment les éléments */
`;
