import { Constants, Location, Permissions } from 'expo';

export function setuserLocation(userLocation) {
    return {
        type: GET_USER_LOCATION,
        payload: userLocation,
    };
}

export function getUserLocation() {

    return async (dispatch) => {
        const userLocation = {
            location: null,
            permission: null
        };

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        console.log('status: ' + status);

		if (status !== 'granted') {
			userLocation.permission = false;
		} else {
            userLocation.permission = true;
        }

		userLocation.location = await Location.getCurrentPositionAsync({});
        
        await dispatch(setuserLocation(userLocation));
        return userLocation;
    };
    
    // return async (dispatch) => {
    //     try {
    //         const apiReq = await fetch('https://warply.s3.amazonaws.com/data/test_pois.json', {
    //         method: 'GET'
    //         });
    //         const resolvedApiReq = await apiReq.json();
    //         await dispatch(setuserLocation(resolvedApiReq));
    //         // await dispatch(setPoisList(data));
    //         return apiReq || [];
    //     } catch (error) {
    //         console.error('fetch error: '+error);
    //     }
    // };
}