import React from 'react'
import {Data} from '../Data'
import classes from './Book.module.css';



const Book = () => {
 
    return( Data.map((book,id)=>{
        return(
       
        <div className={classes.container}>    
        <img className={classes.image} src={book.imageUrl} alt="book-image"/>
        <h3 className={classes.title} id={book.id}>{book.title}</h3>
        <p className={classes.auth}>{book.authname}</p>
        </div>
        )
    }))
 
}

export default Book