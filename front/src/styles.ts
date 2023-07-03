import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 860px;
  width: 1280px;
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
