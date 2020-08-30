import React from 'react';

import classes from  './Backdrop.css';

const Backdrop = (props)=>{
    return(
        props.open ? <div className={classes.Backdrop} onClick={props.BackdropClicked}></div> : null
    )
}

export default Backdrop