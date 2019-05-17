import {
    FETCH_LIST_START,
    FETCH_LIST_SUCCESS,

}   from '../actions';

const initialStateList = {
    friends: [],
    error:'',
    isLoading: false
};

function friendsReducer(state = initialStateList, action){
    switch(action.type){
        case FETCH_LIST_START:
            return {
                ...state,
                error:'',
                isLoading: true
            };
        case FETCH_LIST_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                friends : action.payload,
                isLoading: false
            }
        
        default: 
            
            return state;
    }
}




export default friendsReducer;