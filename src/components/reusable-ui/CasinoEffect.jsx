import React from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup
      component={CasinoEffectStyled}
      className="transition-group"
    >
      <CSSTransition classNames="count-animated" timeout={500} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow: hidden;

  span {
    display: inline-block;
  }
  .count-animated-enter {
    transform: translateY(100%);
  }

  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 0.3s;
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 0.3s;
  }
`;
