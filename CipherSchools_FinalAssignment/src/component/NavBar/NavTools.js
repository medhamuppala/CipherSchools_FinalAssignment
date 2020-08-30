import React from 'react';

import DrawerToggle from './DrawerToggle/DrawerToggle';
import NavigationItems from './Navigation/NavigationItems';
import NavigationItem from './Navigation/NavigationItem/NavigationItem';

import classes from './NavTools.css';

const NavTools = (props)=>{
    return(
        <header className={classes.NavTools}> 

            <h1 className={classes.Brand}><NavigationItem link='/'></NavigationItem></h1>
            <DrawerToggle toggleClicked={props.toggleClicked}/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default NavTools