import React from 'react'
import './mainStyles.scss'

export const Main = ({children}) => {
  return (
    <section className='AppMain'>
        {children}
    </section>
  )
}