import React from 'react';
import './App.css';
import CharacterGrabber from './components/Character';
import styled from 'styled-components'


const App = () => {

  return (
    <div className="App">
      <img src='http://imageshack.com/a/img922/3783/oyvsRd.png' /> 
      <Header>
      Characters  
      </Header>
      <CharacterGrabber />
    </div>
  );
}

export default App;


const Header = styled.h1`
  color: #FFE81F;
  font-size: 3.5rem;
`


