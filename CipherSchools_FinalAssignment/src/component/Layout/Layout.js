import React,{Component} from 'react';
import {connect} from 'react-redux';

import classes from './Layout.css'
import SideDrawer from '../NavBar/SideDrawer/SideDrawer';
import NavTools from '../NavBar/NavTools'; 
import * as action from '../../Store/Action/index';

class Layout extends Component{
    state={
        open:false
    }

    componentDidMount(){
        this.props.fetchProfile();
    }

    toggleHandlerOpen = ()=>{
        this.setState({
            open:true
        })
    }

    toggleHandlerClose = ()=>{
        this.setState({
            open:false
        })
    }

    render(){
        return(
            <div>
                <SideDrawer profile={this.props.profile} spinner={this.props.spinner} open={this.state.open} BackdropClicked={this.toggleHandlerClose}/>
                <NavTools toggleClicked={this.toggleHandlerOpen} open={this.state.open} BackdropClicked={this.toggleHandlerClose}/>
                <div className={classes.content}>
                    {this.props.children}
                </div>            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        profile:state.profile,
        spinner:state.spinner
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        fetchProfile: ()=>dispatch(action.profileFetch())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);