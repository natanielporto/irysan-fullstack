import styled from "styled-components";

export const Container = styled.button`
  height: 550px;
  width: 380px;
  background-color: rgba(220, 220, 220, 0.6);
  border-radius: 5px;
  border: 2px solid lightsteelblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 0;
  overflow-y: scroll;
  overflow: hidden;

  :hover {
    background-color: turquoise;
  }
`;
