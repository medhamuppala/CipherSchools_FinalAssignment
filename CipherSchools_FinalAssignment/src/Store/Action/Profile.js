import * as actionType from './ActionType'; 
import axios from '../../axios';

export const profileSuccess = (formData)=>{
    return{
        type: actionType.PROFILE_SUCCESS,
        formData:formData
    }
}

export const profileFail = ()=>{
    return{
        type: actionType.PROFILE_FAIL
    }
}

export const profileStart = ()=>{
    return{
        type: actionType.PROFILE_START
    }
}

export const profileFetch =()=>{
    return dispatch =>{
        dispatch(profileStart());
        axios.get('/profile.json')
        .then(res=>{
         
            dispatch(profileSuccess(res.data));
        })
        .catch(err=>{
            dispatch(profileFail());
        })
    }
}
