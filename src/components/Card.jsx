import { useState } from 'react';
import './Card.css'

const Card = (props) => {
    const [flipped, setFlipped] = useState(false)
    const cardFlip = () => { 
        setFlipped(!flipped)
    }

    return (
        <div className={'card-container'} onClick={cardFlip}>
            <div className={`card ${flipped ? 'flipped' : ''}`}> 
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