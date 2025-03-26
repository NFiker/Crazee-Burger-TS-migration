import { css, keyframes } from "styled-components";
import { theme } from ".";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const fadeInFromTop = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateY(-40%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInFromRight = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInFromBottom = keyframes`
  0% {
    position: absolute;
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const adminAnimation = css`
  .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);

    &.admin-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all ${theme.animations.speed.quick};
    }
  }
`;

export const basketAnimation = css`
  .animation-basket-appear,
  .animation-basket-enter {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active,
  .animation-basket-enter-active {
    .card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-basket-exit {
    .card {
      transition: 0.2s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(-100px);
      opacity: 0%;
    }
  }
`;

export const menuAnimation = css`
  .menu-animation-enter {
    opacity: 0.01;
    transform: translateX(-120px);
    &.menu-animation-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all ${theme.animations.speed.quick} ease-out;
    }
  }

  .menu-animation-exit {
    opacity: 1;
    transform: translateY(0);
    &.menu-animation-exit-active {
      opacity: 0.01;
      transform: translateX(0);
      transition: ${theme.animations.speed.quick} ease-out;
    }
  }
`;
