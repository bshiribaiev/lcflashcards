import { useState } from 'react';
import './Card.css'

const Card = (props) => {
    const cardFlip = () => { 
        props.setFlipped(!props.flipped)
    }

    return (
        <div className={'card-container'} onClick={cardFlip}>
            <div className={`card ${props.flipped ? 'flipped' : ''}`}> 
                <div className='front'> 
                    <h4 className='question'>{props.question}</h4>
                </div>

                <div className='back'>
                    <h4 className='answer'>{props.answer}</h4>
                </div>
            </div>
        </div>
    )
}


export default Card;