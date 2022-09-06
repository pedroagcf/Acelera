import React from 'react';

import './CardList.css'
export function CardList() {
  return (
    <ul className="cards">
      <li className="cards__item">
        <div className="card">
          <div className="card__image card__image--fence"></div>
          <div className="card__content">
            <div className="card__title">Flex</div>
            <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
            <button className="btn btn--block card__btn">Button</button>
          </div>
        </div>
      </li>
      <li className="cards__item">
        <div className="card">
          <div className="card__image card__image--river"></div>
          <div className="card__content">
            <div className="card__title">Flex Grow</div>
            <p className="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
            <button className="btn btn--block card__btn">Button</button>
          </div>
        </div>
      </li>
      <li className="cards__item">
        <div className="card">
          <div className="card__image card__image--record"></div>
          <div className="card__content">
            <div className="card__title">Flex Shrink</div>
            <p className="card__text">This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.</p>
            <button className="btn btn--block card__btn">Button</button>
          </div>
        </div>
      </li>
      <li className="cards__item">
        <div className="card">
          <div className="card__image card__image--flowers"></div>
          <div className="card__content">
            <div className="card__title">Flex Basis</div>
            <p className="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
            <button className="btn btn--block card__btn">Button</button>
          </div>
        </div>
      </li>
    </ul>
  )
}