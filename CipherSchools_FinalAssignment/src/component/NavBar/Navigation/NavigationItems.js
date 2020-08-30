import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props)=>{

    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link={'/'}>Home</NavigationItem>
            <NavigationItem link={'/contact'}>Contact</NavigationItem>
            <NavigationItem link={'/resume'}>Resume</NavigationItem>
        </ul>
    )
}

export default NavigationItems