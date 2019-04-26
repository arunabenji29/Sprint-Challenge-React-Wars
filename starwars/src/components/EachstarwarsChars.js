import React from 'react'
import './StarWars.css'

const EachstarwarsChars = (props) => {
    return (
        <div className="wars-card">
            {/* <a href={props.charProp.homeworld} alt ={props.charProp.name}/> */}
            <div className='wars-info'>

                <h3>{props.charProp.name}</h3>

                <p>
                    <strong>Eye Color:</strong> {props.charProp.eye_color}
                </p>

                <p>
                    <strong>Gender:</strong> {props.charProp.gender}
                </p>

                <p>
                    <strong>Birth Year:</strong> {props.charProp.birth_year}
                </p>

                {/* <ul>
                    {props.charProp.films.map(film => (
                        <li><a href='film' >link</a></li>
                    ))}
                    
                
                </ul> */}

            </div>
        </div>
    );
}

export default EachstarwarsChars