import React, {Component} from 'react';


import resume from '../Assets/image/resume.jpg';
import classes from './Resume.css'

class Resume extends Component{ 

    render(){
        return(
            <div className={classes.resume}>
                <img src={resume} alt='resume' width='300' height='400'/>
                <h1>Resume</h1> 
               
            </div>
        )
    }
}
export default Resume;