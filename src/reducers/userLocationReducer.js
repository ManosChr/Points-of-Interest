import { GET_USER_LOCATION } from '../constants/types';

const initialState = {
    userLocation: {}
};

const userLocationReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_LOCATION:
            return {
                ...state,
                userLocation: action.payload
            };
        default:
            return state;
    }
}

export default userLocationReducer;