import React, {Component} from 'react';
import '../mystyles.scss'; 

export class Header extends Component {    
    render(){
        const {msgs} = this.props; 
        return (
        <section className="hero is-primary is-medium">
        <div className="hero-body">
            {msgs.map((message, index) => {
                return (
                    <h1 key={index} className='title has-text-info will-fade-in'>{message}</h1>
                );
            })}
        </div>
        </section>
        ); 
    }
}

export default Header; 