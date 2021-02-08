// Write your props component here
import React from 'react'
import styled from 'styled-components'

// interface IProps{
//     name: String;
//     gender: String;
// }

    const Character = ({props}) => {
        return (       
                <CharContainer>
                        <div>
                            <details>
                                <summary>
                                    <h2>{props.name}</h2>
                                </summary>
                                <div>
                                    <ul>
                                        <li>Year Born: {props.birth_year}</li>
                                        <li>Gender: {props.gender}</li>
                                        <li>Height: {props.height}</li>
                                        <li>Mass: {props.mass}</li>
                                        <li>Eye Color: {props.eye_color}</li>
                                        <li>Hair Color: {props.hair_color}</li>
                                    </ul>
                                </div>
                            </details>
                        </div>
                </CharContainer>
    )
}


    const CharContainer = styled.div`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
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

export default Character