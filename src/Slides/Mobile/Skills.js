import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    @media ${device.mobileS} {
    padding-left:30px;
    }
    @media ${device.mobileM} {
    padding-left:30px;
    }
    @media ${device.mobileL} {
    padding-left:30px;
    }
    @media ${device.tablet} {
    padding-left:60px;
    }
`;

const SkillsTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #000;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 70px;
  }
`;

const SkillsList = styled.div`
  font-family: 'AvenirRoman';
  z-index: 1;
  
  @media ${device.mobileS} {
    margin-top: 20px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    margin-top: 20px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    margin-top: 20px;
    font-size: 25px;
  }
  @media ${device.tablet} {
    margin-top: 30px;
    font-size: 30px;
  }
`;

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            React
            <br />
            React Native
            <br />
            Node.js
            <br />
            <br />
            Functional Programming
            <br />
            CSS Flexbox / Grids
            <br />
            Scalable Vector Graphics
            <br />
            <br />
            Responsive Design
            <br />
            Testing & Debugging
            <br />
            Application Architecture
            <br />
            <br />
            Sketch
            <br />
            Principle
            <br />
            Invision
            <br />
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
