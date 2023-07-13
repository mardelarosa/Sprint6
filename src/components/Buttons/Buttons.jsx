import React from "react";
import { DivButtonsStyle, ButtonStyle } from "./ButtonsStyled";

export const Buttons = ({ increment, decrement }) => (
  <DivButtonsStyle className="botons">
    <ButtonStyle className="boto" onClick={decrement}>
      Anterior
    </ButtonStyle>
    <ButtonStyle className="boto" onClick={increment}>
      Següent
    </ButtonStyle>
  </DivButtonsStyle>
);
