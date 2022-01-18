const initialState={
    search:""
}

export function listReducer(state=initialState,action){
    switch(action.type){
        case 'GET_SEARCH':
            return Object.assign({},state,{
                search:action.payload
            })
        default:
            return state;
    }
}