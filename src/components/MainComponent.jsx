import React from 'react'
import classes from './MainComponent.module.css'
import Book from './Book'

const MainComponent = () => {
  return (
    <>
    <h1 className={classes.header}>
        Amazon's Best Seller
    </h1>
    <Book/>
    
    </>
  )
}

export default MainComponent