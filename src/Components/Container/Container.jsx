import React from 'react'
import './containerStyles.scss'

export const Container = ({children}) => {
  return (
    <div className='Main__Container'>
        {children}
    </div>
  )
}
