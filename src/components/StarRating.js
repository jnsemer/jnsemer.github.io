import React, { Component } from 'react'; 

export class StarRating extends Component {
    render() {
        const { rating } = this.props; 
        var stars = [];

        for (let j = 0; j < rating; j++) {
            stars.push(<i class="fas fa-star"></i>)
          }

        return (
            <div>{stars}</div>
        );
    }
}

export default StarRating; 