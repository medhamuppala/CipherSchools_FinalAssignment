import React, {Component} from 'react';


import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import contactImage from '../Assets/image/contact.jpg';
import classes from './Contact.css'

class Contact extends Component{
    render(){
        return(
            <div className={classes.contact}>   
                <img className={classes.contactImage} src={contactImage} alt="student"/>  
                <h1>Click below to get in touch</h1>
                <div className={classes.icons}>
                    <a href="https://www.linkedin.com/in/medhamuppala/"><LinkedInIcon className={classes.icon}/></a>
                    <a href="https://www.github.com/medhamuppala/"><GitHubIcon className={classes.icon}/></a>
                    <a href="https://www.twitter.com/medhamuppala/"><TwitterIcon className={classes.icon}/></a>
                </div>                   
               
            </div>
        )
    }
}
export default Contact;