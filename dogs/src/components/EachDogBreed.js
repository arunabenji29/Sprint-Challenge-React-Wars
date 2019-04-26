import React from 'react'
import './DogBreed.css'

const EachDogBreed = (props)=>{
    return (
        <div className='dog-card'>
            <img src={props.dogProp} alt="dog img" />
        </div>
    );
}
export default EachDogBreed