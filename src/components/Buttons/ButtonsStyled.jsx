import styled from 'styled-components';

export const DivButtonsStyle = styled.div`
  text-align: center;
  margin: 1rem;
`;

export const ButtonStyle = styled.button`
  width: 45vw;
  margin: 0.5rem;
  padding: 1.5rem;
  font-size: 2rem;
  border: 0.1rem solid #000;
  border-radius: 1rem;

  &:hover {
    background-color: #ffdced;
  }

  &:active {
    outline: 0.1rem solid #000;
  }
`;
