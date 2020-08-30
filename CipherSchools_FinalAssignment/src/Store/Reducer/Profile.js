import * as actionType from '../Action/ActionType';


const initialState = {
    profile:{},
    spinner:false
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionType.PROFILE_START:
            return{
                ...state,
                spinner:true
            }

            case actionType.PROFILE_SUCCESS:
            return{
                ...state,
                profile:action.formData,
                spinner:false
            }
                
            case actionType.PROFILE_FAIL:
            return{
                ...state,
                spinner:false
            }

            default:
                return{
                    ...state
                }
    }

}

export default reducer