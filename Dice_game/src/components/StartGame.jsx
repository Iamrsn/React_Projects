import { useState } from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {

  return (
    <Container>
      <div>
        <img src="/images/dice.png" alt="dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1180px;

  .content {
    h1 {  //saas property means classname inside element we can use and give css
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

