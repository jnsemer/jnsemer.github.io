import React, {Component} from 'react';

export class Contact extends Component {
    //todo: implement props 
    render(){
        const {contact} = this.props; 
        return (
            <div className='hero is-small is-primary'>
                <div className='hero-body'>
                    <div className='content'>
                        find me elsewhere on the web:
                        <div className='is-centered'>
                    {contact.map((contactpoint) => {
                        return (
                            <span key={contactpoint.medium} className='icon has-text-black'>
                                <a className={contactpoint.icon} href={contactpoint.link}/>
                            </span>
                        );
                    })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact; 