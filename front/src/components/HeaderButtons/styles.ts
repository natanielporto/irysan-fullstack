import styled from "styled-components";

export const Container = styled.div`
  height: 45px;
  width: 100%;
  position: absolute;
  margin: auto;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
`;

export const Button = styled.button`
  background: turquoise;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export const InputButton = styled.button`
  background: turquoise;
  padding: 8px;
  border: none;
  border-radius: 5px 0 0 5px;
  color: white;
  cursor: pointer;
`;

export const InputLeft = styled.input`
  border: none;
  padding: 8px;
  border-right: 1px solid turquoise;
  width: 100px;
  &::placeholder {
    color: turquoise;
  }
`;

export const InputRight = styled.input`
  border: none;
  padding: 8px;
  width: 100px;
  border-radius: 0 5px 5px 0;
  border-right: 1px solid turquoise;
  &::placeholder {
    color: turquoise;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 8px;
  width: 150px;
  &::placeholder {
    color: turquoise;
  }
`;
