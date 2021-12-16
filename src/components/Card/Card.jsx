import React from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";
// import logo from './2.jpg';
// import myimage from './1.png'

const Card = ({card}) => {
    const {id, title, description} = card
    let navigate = useNavigate()
    return (
        <div className="card">
            {/*<img src={process.env.PUBLIC_URL + '/1.png'} alt="logo" />*/}
            {/*<img src="myimage" width={100}/>*/}
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => navigate(`/tour/${id}`)}>Перейти</button>
        </div>
    )
}

export default Card;
