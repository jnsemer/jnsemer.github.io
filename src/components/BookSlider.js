import React, {Component} from 'react';
import BookReview from './BookReview';

export class BookSlider extends Component {
    constructor(props){
        super(props);

        this.state = {
            current: 0, 
            max: this.props.books.length - 1
        };
    }

    componentDidMount(){
        this.setTimer(); 
    }

    setTimer(){
        clearTimeout(this.timeout); 
        this.timeout = setTimeout(this.getNext.bind(this), 10000);
    }

    getNext(){
        this.setState(this.incrementSlider(this.state), this.setTimer())
    }

    incrementSlider(currentState) {
        if(currentState.current === currentState.max){
            return {current:0, max:currentState.max};
        }else{
            return {current:currentState.current + 1, max:currentState.max};
        }
    }

    render(){
        return (
            <div className='hero hero-body is-dark'>
                <div className='columns'>
                <div className='column'></div>
                <div className='column'>
                    <div className='has-text-info has-text-centered is-size-4 has-text-weight-semibold'>bite-sized book reviews</div>
                    <BookReview booknumber={this.state.current} books={this.props.books} />
                </div>
                <div className='column'></div>
                </div>
            </div>
        );
    }
}

export default BookSlider; 