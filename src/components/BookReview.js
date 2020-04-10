import React, { Component } from 'react';
import { StarRating } from './StarRating'; 

export class BookReview extends Component {
    render(){
        const { booknumber, books } = this.props; 
        return (
            <div className='hero-body is-dark'>
                {books.map((book, index) => {
                    return(
                        <div key={index} className='has-text-info has-text-centered'>
                            {book.number === booknumber &&
                                <div>
                                    <div className='is-italic is-size-5'>{book.title}</div>
                                    <div className='is-size-6 has-text-weight-medium'>by {book.author}  <StarRating rating={book.rating} /></div>
                                    <div className='has-text-weight-medium'>{book.review}</div>
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default BookReview; 