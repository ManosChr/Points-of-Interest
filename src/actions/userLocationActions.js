import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GET_USER_LOCATION } from '../constants/types';

export function setuserLocation(userLocation) {
    return {
        type: GET_USER_LOCATION,
        payload: userLocation,
    };
}

// Asks location permission from the user and if granted gets user location and dispatches an action to the reducer
export function getUserLocation() {

    return async (dispatch) => {
        const userLocation = {
            location: null,
            permission: null
        };

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        
		if (status !== 'granted') {
			userLocation.permission = false;
		} else {
            userLocation.permission = true;
        }
        
        let response = await Location.getCurrentPositionAsync({});
        userLocation.location = response.coords;
        
        await dispatch(setuserLocation(userLocation));
        
        return userLocation;
    };
}