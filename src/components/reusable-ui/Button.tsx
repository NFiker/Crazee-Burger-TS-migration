import styled from "styled-components";
import { theme } from "../../theme/theme";
import { css } from "styled-components";
import { ComponentProps } from "react";

type ButtonVersion = "normal" | "success";

type ButtonProps = {
  label: string;
  Icon: JSX.Element;
  version: ButtonVersion;
} & ComponentProps<"button">;

export default function Button({
  label,
  Icon,
  className,
  version = "normal",
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  );
}

type ButtonStyledProps = { version: ButtonVersion };

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: 13px;
  font-weight: ${theme.fonts.weight.semiBold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: white;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 0.2s ease-out;
  }

  &:active {
    color: white;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 10px; */
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weight.semiBold};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    transition: all 0.2s ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
};
