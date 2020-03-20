import React from 'react';
import Data from "./Data";
import styled from "styled-components";

const Header = styled.h1`
font-size: 2rem;
text-align: center;

`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <Header>
      <h1 className="Header">Starwars Characters</h1>
      <Data/>
    </Header>
  );
}
export default App;

