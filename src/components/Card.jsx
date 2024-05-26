import React from 'react';
import './styles/card.css';

const Card = ({color, text}) => {

    const borderColor = {
        borderColor:color,

    }
    const textColor = {
        color: color,
    }

  return (
    <article style={borderColor}className='card'>
        <h2 className='card__header'>Header</h2>
        <h3 className='card__title'>{text} card title</h3>
        <p style={textColor}className='card__text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut similique natus aliquid sit pariatur iste laboriosam ea vero, laborum aspernatur distinctio sint! Ipsam odio ipsa eligendi aliquam mollitia inventore!</p>
    </article>
  )
}

export default Card