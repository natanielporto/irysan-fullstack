import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; onClick: () => void }>`
  width: 90%;
  padding: 10px;
  background-color: ${({ selected }) =>
    selected ? "turquoise" : "rgba(220, 220, 220, 0.6)"};
  border-radius: 5px;
  border: 2px solid darkgrey;
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
`;

export const Star = styled.span`
  font-size: 24px;
`;

export const AsteroidNameTag = styled.h2`
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const AsteroidDescription = styled.h4`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
