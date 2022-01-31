export function addToWatchList(payload){
    return {
        type:'ADD_TO_WATCH_LIST',
        payload
    }
}

export function removeFromWatchList(payload){
    return {
        type:'REMOVE_FROM_WATCH_LIST',
        payload
    }
}