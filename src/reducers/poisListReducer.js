import { GET_POIS_LIST } from '../constants/types';

const initialState = {
    poisList: []
};

// Pois List Reducer
// gets an action and returns the pois list to the store
const poisListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POIS_LIST:
            return {
                ...state,
                poisList: action.payload
            };
        default:
            return state;
    }
}

export default poisListReducer;