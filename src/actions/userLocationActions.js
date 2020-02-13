import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GET_USER_LOCATION } from '../constants/types';

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
    try{
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        
		if (status !== 'granted') {
			userLocation.permission = false;
		} else {
            userLocation.permission = true;
        }
        
        let response = await Location.getCurrentPositionAsync({});
        userLocation.location = response.coords;
        // console.log('statu3s: ' + status);
        // console.log('coords: ' +  JSON.stringify(userLocation.location));
        // console.log('permission: ' + JSON.stringify(userLocation.permission));
        await dispatch(setuserLocation(userLocation));
        // console.log('!!!!!userLocation: ' + JSON.stringify(userLocation));
        return userLocation;
    } catch (error) {
        console.error('get location error: '+error);
    }
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