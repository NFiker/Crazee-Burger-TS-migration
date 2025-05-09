import { CSSTransition } from "react-transition-group";
import Ribbon from "@/components/reusable-ui/Ribbon.tsx";
import { css } from "styled-components";

export default function RibbonAnimated() {
  return (
    <CSSTransition
      in={true}
      timeout={500}
      appear={true}
      classNames="ribbon-animation"
    >
      <Ribbon className="ribbon" label="nouveau" />
    </CSSTransition>
  );
}

export const ribbonAnimation = css`
  .ribbon-animation-appear {
    position: absolute;
    opacity: 0.1;
    transform: scale(1.8);
    &.ribbon-animation-appear-active {
      transition: ease-out 500ms;
      opacity: 1;
      transform: scale(1);
    }
  }

  .ribbon-animation-exit {
    position: absolute;
    opacity: 1;
    transition: 1s;
    &.ribbon-animation-exit-active {
      opacity: 0.1;
      transform: scale(1.5);
    }
  }
`;
