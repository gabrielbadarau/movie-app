const initialState={
    watchList:[]
}

export function listReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_TO_WATCH_LIST':
            return Object.assign({},{
                watchList:[...state.watchList,action.payload]
            })
        case 'REMOVE_FROM_WATCH_LIST':
            const newArray=state.watchList.filter((item)=>{
                return item.id!==action.payload.id
            });
            return Object.assign({},{
                watchList:newArray
            })
        default:
            return state;
    }
}