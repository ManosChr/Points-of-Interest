import { GET_POIS_LIST } from '../constants/types';

const initialState = {
    poisList: []
};

const poisListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POIS_LIST:
            return {
                ...state,
                poisList: []
            };
        default:
            return state;
    }
}

export default poisListReducer;