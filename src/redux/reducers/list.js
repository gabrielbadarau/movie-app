const initialState={
    watchList:[],
    favoriteList:[]
}

export function listReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_TO_WATCH_LIST':
            return Object.assign({},{
                ...state,
                watchList:[...state.watchList,action.payload]
            })
        case 'REMOVE_FROM_WATCH_LIST':
            const newArray=state.watchList.filter((item)=>item.id!==action.payload.id);
            return Object.assign({},{
                ...state,
                watchList:newArray
            })
        case 'ADD_TO_FAVORITE':
            return Object.assign({},{
                ...state,
                favoriteList:[...state.favoriteList,action.payload]
            })
        case 'REMOVE_FROM_FAVORITE':
            const newArray2=state.favoriteList.filter((item)=>item.id!==action.payload.id);
            return Object.assign({},{
                ...state,
                favoriteList:newArray2
            })
        default:
            return state;
    }
}