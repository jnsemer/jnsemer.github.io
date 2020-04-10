import React, {Component} from 'react';

export class Education extends Component {
    render(){
        const {education} = this.props; 
        return(
            <div className='hero is-small is-light'>
                <div className='hero-body'>
                <div className='level has-text-black'>
                <p className='is-centered'>{education.school}</p>
                <p>{education.degree}</p>
                <p>{education.major}</p>
                <p>{education.gradyear}</p>
                </div>
                </div>
            </div>
            
        );
    }
}

export default Education; 