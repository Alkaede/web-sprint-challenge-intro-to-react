// Write your Character component here
import React, { useState } from 'react'
import axios from 'axios'
// import styled from 'styled-components'

// const charContainer = styled.div`

//     ul{
//         list-style-type: none;
//     }

// `




export default function CharacterGrabber() {

    const [characters, setCharacters] = useState(null) 


    // setting up axios to fetch character data
    axios
        .get('https://swapi.dev/api/people/')
        .then(res => {
            console.log(res.data)
            setCharacters(res.data)
        })
        .catch(err => console.log(err))


        return (
            <div>
            {
                characters && 
                    characters.map((character) => {
                        return (
                            <div>
                                <div>
                                    <h2>{character.name}</h2>
                                    <h2>{character.birth_year}</h2>
                                </div>
                                    <ul>
                                        <li>Gender: {character.gender}</li>
                                        <li>Mass: {character.mass}</li>
                                        <li>Eye Color: {character.eye_color}</li>
                                        <li>Hair Color: {character.hair_color}</li>
                                    </ul>
                            </div>
                        )
                    })
            }
            </div>
        )
    }