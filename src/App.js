import React, { Component, Fragment } from "react";

import {
  Box,
  Title,
  Button,
  InvertedButton,
  Rotate,
  Row,
  DemoCell,
  SourceCell,
  EmojiWrapper,
} from "./styles";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <DemoCell>
            <Title>Hi i'm a title</Title>
            <Box width={500} height="150px">
              <Title>
                Hi i'm inside the box so i inherit children styles from the box!
              </Title>
            </Box>
          </DemoCell>
          <SourceCell>
            {`export const Title = styled.h1\`
  font-size: 32px;
  color: gray;
\`;

export const Box = styled.div\`
  $\{width};
  $\{height};
  background-color: tomato;

  $\{Title} {
    color: white;
    text-align: center;
  }
\`;`}
          </SourceCell>
        </Row>
        <Row>
          <DemoCell>
            <Button>Press me!</Button>
            <Button color="blue">Press me!</Button>
            <Button color="blue" disabled>
              Press me!
            </Button>
          </DemoCell>
          <SourceCell>
            {`export const Button = styled.button\`
  color: $\{props => props.color || "red"};
  font-size: 14px;
  &[disabled] {
    opacity: 0.5;
  }
\`;`}
          </SourceCell>
        </Row>

        <Row>
          <DemoCell>
            <InvertedButton>Press me!</InvertedButton>
            <InvertedButton disabled>Press me!</InvertedButton>
          </DemoCell>
          <SourceCell>
            {`export const InvertedButton = Button.extend\`
  background-color: red;
  color: white;
\`;`}
          </SourceCell>
        </Row>

        <Row>
          <DemoCell>
            <Rotate>
              <EmojiWrapper>🤢🤢🤢🤢🤢🤢🤢</EmojiWrapper>
            </Rotate>
          </DemoCell>
          <SourceCell>
            {`const rotate360 = keyframes\`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
\`;

export const Rotate = styled.div\`
  display: inline-block;
  animation: $\{rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
\`;

// passing attributes to an element
export const EmojiWrapper = styled.span.attrs({
  role: "img",
  "aria-label": "Emoji Wrapper",
})\`
  display: inline-block;
\`;

`}
          </SourceCell>
        </Row>
      </Fragment>
    );
  }
}

export default App;
