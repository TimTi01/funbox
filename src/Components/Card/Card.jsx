import React from 'react'
import './cardStyles.scss'

export const Card = ({ subtitle, title, taste, list, circleNum}) => {
  return (
    <article className='Main__Card' >
        <div className='Card__Content'>
          <p className='Content__Subtitle'>{subtitle}</p>
          <h2 className='Content__Title'>{title}</h2>
          <p className='Content__Taste'>{taste}</p>
          <ul className='Content__List'>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className='Content__Circle'>
              <span className='Circle__Num'>{circleNum}</span>
              <span className='Circle__Wt'>кг</span>
          </div>
        </div>
        <div className='Card__TextBottom'>
          <p className='TextBottom__Text'>Чего сидишь? Порадуй котэ,</p>
          <button className='TextBottom__Button'>купи.</button>
        </div>
    </article>
  )
}