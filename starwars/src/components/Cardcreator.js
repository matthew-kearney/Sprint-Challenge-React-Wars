import React from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;flex-wrap: wrap;
`;

const Data = styled.div`
display: flex;  
  flex-direction: column;
  border: ridge 10px greenyellow;
  width: 60%;
  margin: 1%;
  background-color: dodgerblue;
  border-radius: 10px;
  h3 {
      font-size: 1.5rem;
  font-style:oblique;
  
  }
`;

const Cardcreator = props => {
  return (
    <Body>
      <Data>
        <h1>{props.data.name}</h1>
        <h3>birth year: {props.data.birth_year}</h3>
        <h3>eye color: {props.data.eye_color}</h3>
        <h3>hair color: {props.data.hair_color}</h3>
        <h3>skin color: {props.data.skin_color}</h3>
        <h3>height: {props.data.height}</h3>
        <h3>mass: {props.data.mass}</h3>
      </Data>
    </Body>
  );
};

export default Cardcreator;
