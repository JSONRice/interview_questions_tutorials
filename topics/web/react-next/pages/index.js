import React from 'react'
import Head from '../components/head'
import styled from "styled-components";

const FlexboxContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const FlexboxColumnContainer = styled(FlexboxContainer)`
  flex-direction: column;
`;

const FlexboxRowContainer = styled(FlexboxContainer)`
  display: flex;
`;


const Labels = styled.div`
  padding: 10px;
  background-color: #4c81c9;
`;

const Label = styled.label`
  margin: 5px;
  display: block;
`;

const Inputs = styled.div`
  padding: 10px;
  background-color: #d6baad;
`;

const Input = styled.input`
  margin: 5px;
  display: block;
`;

const Home = () => (
  <div>
    <Head title="Home" />
    <div className="hero">
      <h1 className="title">A simple page showcasing form layouts!</h1>
    </div>

    <h4>Flexbox Column Direction Layout</h4>
    <FlexboxColumnContainer>
      <Labels>
        <Label htmlFor="fname">First name:</Label>
        <Label htmlFor="lname">Last name:</Label>
      </Labels>
      <Inputs>
        <Input type="text" id="fname" name="fname"/>
        <Input type="text" id="lname" name="lname"/>
      </Inputs>
    </FlexboxColumnContainer>

    <h4>Flexbox Row Direction Layout</h4>
    <FlexboxRowContainer>
      <Labels>
        <Label htmlFor="fname">First name:</Label>
        <Label htmlFor="lname">Last name:</Label>
      </Labels>
      <Inputs>
        <Input type="text" id="fname" name="fname"/>
        <Input type="text" id="lname" name="lname"/>
      </Inputs>
    </FlexboxRowContainer>
  </div>
);

export default Home
