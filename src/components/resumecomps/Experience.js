import React, {Component} from 'react'; 

export class Experience extends Component {
    render(){
        const {experience, role} = this.props; 
        return(
            <div className='container'>
            {experience.map((exp, index) => {
                return (
                    <div key={index} className='content'>
                    <p className="is-uppercase has-text-weight-bold">{exp.company}</p>
                    <p className="has-text-weight-semibold">{exp.dates}</p>
                    {exp.accomplishments.map((accomplished, index) => {
                        return (
                            <div key={index}>
                            {accomplished.role === role &&
                                <li>{accomplished.accomplishment}</li>
                            }
                            </div>
                        );
                    })}
                    </div>
                );
            })}
            </div>
        );
    }
}

export default Experience; 