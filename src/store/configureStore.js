import { createStore, combineReducers } from 'redux';
import poisListReducer from '../reducers/poisListReducer';
import userLocationReducer from '../reducers/userLocationReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
    { 
        poisList: poisListReducer,
        userLocation: userLocationReducer
    }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;