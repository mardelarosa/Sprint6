import React from "react";
import { ContainerEscenesStyle, EscenaStyle } from "./EscenaStyled";

export const Escena = ({ story, activeText }) => (
  <ContainerEscenesStyle className="escenes">
    {story.map((element) => (
      <EscenaStyle
        key={element.id}
        className={`"text" ${activeText === element.id ? "activeBackground" : ""}`}>
        {element.text}
      </EscenaStyle>
    ))}
  </ContainerEscenesStyle>
);
