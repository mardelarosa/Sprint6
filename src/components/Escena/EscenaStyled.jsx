import styled from "styled-components";

export const ContainerEscenesStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EscenaStyle = styled.div`
  margin: 1rem 2rem;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  border: 0.2rem solid #000;
  border-radius: 2rem;

  &.activeBackground {
    background-color: #ffd4e8;
  }
`;
