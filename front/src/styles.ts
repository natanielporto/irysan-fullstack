import styled from "styled-components";

export const Container = styled.main`
  position: relative;
`;

export const TopSpan = styled.span`
  position: absolute;
  top: -20px;
  left: 0;
`;

export const RightSpan = styled.span`
  position: absolute;
  writing-mode: vertical-rl;
`;

export const BottomSpan = styled.span`
  position: absolute;
  bottom: -16px;
  right: 0;
`;

export const LeftSpan = styled.span`
  position: absolute;
  left: -16px;
  bottom: 0;
  writing-mode: vertical-rl;
`;
