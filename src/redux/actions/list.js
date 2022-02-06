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

export function addToFavorite(payload){
    return {
        type:'ADD_TO_FAVORITE',
        payload
    }
}

export function removeFromFavorite(payload){
    return {
        type:'REMOVE_FROM_FAVORITE',
        payload
    }
}

export function addWatchList(payload){
    return {
        type:'ADD_WATCH_LIST',
        payload
    }
}

export function addFavoriteList(payload){
    return {
        type:'ADD_FAVORITE_LIST',
        payload
    }
}