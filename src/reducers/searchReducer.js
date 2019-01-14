import { FETCH_SEARCH_DATA, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE } from '../actions/index';

const initialState = {
    payload: [],
    isLoading: false,
    error: {}  
}

export function searchReducer(state= initialState, action){

    switch (action.type) {

        case FETCH_SEARCH_DATA:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_SEARCH_SUCCESS:
            return {
              ...state,
              payload: action.payload,
              isLoading: false
            };

        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        // case RESET_SEARCH_DATA:
        //     return { ...state, ...initialState }    
    
        default:
            return state;
    }
}