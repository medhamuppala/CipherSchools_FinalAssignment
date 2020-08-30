import React, {Component} from 'react';


import mySelf from '../Assets/image/mySelf.jpg';
import classes from './Home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <div className={classes.homeItem}>
                    <img className={classes.mySelfImage} src={mySelf} alt="student"/>
                    <h1>Hey!</h1>
                    <h1>I'm Medha Muppala</h1>                      
                </div>
               
            </div>
        )
    }
}

export default Home;