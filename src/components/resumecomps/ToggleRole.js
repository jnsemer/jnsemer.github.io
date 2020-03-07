import React, { Component } from 'react'; 
import Experience from './Experience';
import '../../mystyles.scss';

export class ToggleRole extends Component {
    constructor(props){
        super(props); 

        this.state = {
            whichRole: 0
        }
    }

    handleOnClick(id, e){
        this.setState({
            whichRole: id
        })
    }

    render(){
        const {roles, experience} = this.props; 

        return (
            <section className='hero is-light is-small'>
            <div className='hero-body'>
            <div className='columns is-vcentered'>
                <div className='column is-one-third'>
                <div className="buttons are-medium ">
                {roles.map((role) => {
                        return (
                        <div key={role.roleId} id={role.roleId} className='button is-fullwidth is-dark' onClick={(e) => this.handleOnClick(role.roleId, e)}>{role.title}</div>
                        );
                    })}
                </div>
                </div>
                <div className='column is-two-thirds is-centered'>
                <Experience experience={experience} role={this.state.whichRole}/>
                </div>
            </div>
            </div>
            </section>
        );
    }
}

export default ToggleRole; 