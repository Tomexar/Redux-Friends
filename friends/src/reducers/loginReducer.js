import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions'

const initialState = {
    error: '',
    isLoggingIn: false
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
            }
        default: 
            return state;
    }
}

export default loginReducer