import React from 'react'
import './cardStyles.scss'

export const Card = () => {
  return (
    <article className='Main__Card'>
        <div className='Card__Content'>
          <p className='Content__Subtitle'>Сказочное заморское яство</p>
          <h2 className='Content__Title'>Нямушка</h2>
          <p className='Content__Taste'>с фуа-гра</p>
          <ul className='Content__List'>
            <li>10 порции</li>
            <li>мышь в подарок</li>
          </ul>
          <div className='Content__Circle'>
              <span className='Circle__Num'>0,5</span>
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