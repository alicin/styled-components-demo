import styled, { keyframes } from "styled-components";
import { width, height } from "styled-system";

export const Row = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid gray;
`;

export const DemoCell = styled.div`
  flex: 1;
`;

export const SourceCell = styled.pre`
  display: block;
  flex: 1;
`;

export const Button = styled.button`
  color: ${props => props.color || "red"};
  font-size: 14px;
  &[disabled] {
    opacity: 0.5;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: gray;
`;

export const Box = styled.div`
  ${width};
  ${height};
  background-color: tomato;
  ${Title} {
    color: white;
    text-align: center;
  }
`;

export const InvertedButton = Button.extend`
  background-color: red;
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  margin-top: 100px;
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

Rotate.displayName = "Rotate";

export const EmojiWrapper = styled.span.attrs({
  role: "img",
  "aria-label": "Emoji Wrapper",
})`
  display: inline-block;
`;
