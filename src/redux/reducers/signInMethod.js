const initialState={
    user:null,
    loading:false,
    error:null
}

export function signInMethodReducer(state=initialState,action){
    switch(action.type){
        case 'UPDATE_LOADING':
            return Object.assign({},state,{
                loading:true
            })
        case 'UPDATE_USER_NAME':
            return Object.assign({},state,{
                user:action.payload,
                loading:false,
                error:null
            })
        case 'UPDATE_ERROR':
            return Object.assign({},state,{
                error:action.payload,
                loading:false
            })
        default:
            return state;
    }
}