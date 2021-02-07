// Write your Character component here
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default function CharacterGrabber() {

    const [characters, setCharacters] = useState(null) 

    // setting up axios to fetch character data
    useEffect(()=>{
        axios
        .get('https://swapi.dev/api/people/')
        .then(res => {
            console.log(res.data)
            setCharacters(res.data)
        })
        .catch(err => console.log(err))
    }, [])



        return (
            <CharContainer>
            {
                characters && 
                    characters.map((character) => {
                        return (
                            <div>
                                <details>
                                    <summary>
                                        <h2>{character.name}</h2>
                                    </summary>
                                        <ul>
                                            <li>Year Born: {character.birth_year}</li>
                                            <li>Gender: {character.gender}</li>
                                            <li>Mass: {character.mass}</li>
                                            <li>Eye Color: {character.eye_color}</li>
                                            <li>Hair Color: {character.hair_color}</li>
                                        </ul>
                                </details>
                            </div>
                        )
                    })
            }
            </CharContainer>
        )
    }


    const CharContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5%;
    color: #ededed;
    text-shadow: 1px 1px 5px #fff;

        h2{
        display: inline-block;
        }

        ul{
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        list-style-type: none;
        font-weight: bold;
        font-size: 1.5rem;
        padding-right: 35px;
        }

        li{
        padding: 1vh;
        }
    `