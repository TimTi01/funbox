import React, { useState } from 'react'
import './cardStyles.scss'

export const Card = ({ subtitle, subtitleHover, title, taste, list, circleNum, buttomText, cardDisabled}) => {
  const [actionsubtitle, setActionsubtitle] = useState(false)
  const [action, setAction] = useState(false)
  const [cardStyles, setCardStyles] = useState('Card__Content')

  const onClick = () => {
    setAction(!action)
    setStyles()
  }

  const setStyles = () => {
    action
      ? setCardStyles('Card__Content')
      : setCardStyles('Card__Content Card__Content--active')
  }

  const setStylesHoverUp = (e) => {
    e.preventDefault();

    action
      ? setCardStyles('Card__Content Card__Content--hoverNotAction') 
      : setCardStyles('Card__Content Card__Content--active Card__Content--hoverAction')

    if (action) {
      setActionsubtitle(true)
    }
  }

  const setStylesHoverDown = (e) => {
    e.preventDefault();

    !action
      ? setCardStyles('Card__Content')
      : setCardStyles('Card__Content Card__Content--active')


      if (action) {
        setActionsubtitle(false)
      }
  }

  const getButtomText = () => {
    if (!action && !cardDisabled) {
     return <>
              <p className='TextBottom__Text'>Чего сидишь? Порадуй котэ,</p>
              <button className='TextBottom__Button'
                      onClick={onClick}
              >
                купи.
              </button>
            </>
    } else if (action && !cardDisabled) {
            return <p className='TextBottom__Text'>{buttomText}</p>
    } else if (cardDisabled) {
            return <p className='TextBottom__Text'>{`Печалька, ${taste} закончился`}</p>
    }
  }


  return (
    <article className='Main__Card'
             onClick={onClick}
             onMouseEnter={(e) => setStylesHoverUp(e)}
             onMouseLeave={(e) => setStylesHoverDown(e)}
    >
        <div className={'Card__Content--background'}>
          <div className={cardDisabled ? 'Card__Content Card__Content--disabled' : `${cardStyles}`}>
            <p className='Content__Subtitle'>{actionsubtitle ? subtitleHover : subtitle}</p>
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
        </div>
        <div className='Card__TextBottom'>
          {getButtomText()}
        </div>
    </article>
  )
}