import React from 'react'

import img from '../images/icon-ellipsis.svg'

const Card = ({title, previous, current}) => {

    return (
        <div className={`card ${title}`}>
            <div className='flex'>
                <p>{title}</p>
                <img className='svg' src={img}></img>
            </div>

            <div className='flex__card'>
                <p className='card__hours'>{current}hrs</p>
                <p className='card__stats'>Last week - {previous}hrs</p>
            </div>
        </div>
    )
}

export default Card
