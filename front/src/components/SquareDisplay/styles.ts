import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 600px;
  width: 800px;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(220, 220, 220, 0.3);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
