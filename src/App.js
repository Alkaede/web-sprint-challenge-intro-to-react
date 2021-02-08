import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'


const App = () => {

  const [characters, setCharacters] = useState([]); 

  // setting up axios to fetch character data
  useEffect(()=>{
      axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {console.log(err)})
  }, []);


  return (
    <div className="App">
      <img src='http://imageshack.com/a/img922/3783/oyvsRd.png' alt='starwars' /> 
      <Header>
      Characters  
      </Header>
       <div>
       { characters && characters.map(character => {
          return(<Character key={character.id} props= {character}/>)
        })}
       </div>
    </div>
  )
}
export default App;


const Header = styled.h1`
  color: #FFE81F;
  font-size: 3.5rem;
`


