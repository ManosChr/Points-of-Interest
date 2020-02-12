import React, { Component } from 'react';
import { FlatList, Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as poisListActions from '../actions/poisListActions';
import * as userLocationActions from '../actions/userLocationActions';
import ListItem from './ListItem';
import Constants from 'expo-constants';

/**
 * This function takes in latitude and longitude of two locations (A, B)and
 * returns the distance between them as linear distance in km
 */
const calculateLinearDistance = (latA, lonA, latB, lonB) => {
    const R = 6371; // Earth R in km
    const dLat = toRad(latB - latA);
    const dLon = toRad(lonB - lonA);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(toRad(latA)) *
        Math.cos(toRad(latB));
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
  
    return d;
  };
  
  /**
   * Converts numeric degrees to radians
   */
  const toRad = value => (value * Math.PI) / 180;
  
  /**
   * Method that gets a lat, lon of the device and sort the POIs based on distance or alphabetically if DIVICE_LOCATION_ENABLED is false
   * data provided as param
   */
  function getSortedData(DIVICE_LAT, DIVICE_LON, DATA, DIVICE_LOCATION_ENABLED) {
    /**
     * Method using calculateLinearDistance but with fixed LAT LON(Point A)from the device passed
     */
    const distanceFromDivice = (lat, lon) =>
      calculateLinearDistance(DIVICE_LAT, DIVICE_LON, lat, lon);
  
    /**
     * Compares two distances from a fixed point and returns shorter (a-b)
     */
    const distanceFromDiviceComparator = (a, b) => a.distance - b.distance;
  
    /**
     * Compares alphabetically the address of POI (using localeCompare)
     */
    const localeAlphabeticallyComparator = (a, b) =>
      ("" + a.address).localeCompare(b.address);
  
    const updatedAndSortedArray = DATA
      .map(e => {
        return {
          ...e,
          distance: distanceFromDivice(Number(e.latitude), Number(e.longitude))
        };
      })
      .sort(
        DIVICE_LOCATION_ENABLED
          ? distanceFromDiviceComparator
          : localeAlphabeticallyComparator
      );
  
    return updatedAndSortedArray;
}

class PoisList extends Component {

    componentDidMount() {
        let { actions } = this.props;
        
        if (Platform.OS === 'android' && !Constants.isDevice) {
            console.log('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
        } else {
            actions.getUserLocation();
        }
        // console.log('11coords: ' + userLocation.location);
        // console.log('11permission: ' + userLocation.permission);
        // console.log('22userLocation: ' + JSON.stringify(userLocation.location.longitude));
        // console.log('22userLocation: ' + JSON.stringify(userLocation.location.latitude));

        actions.getPoisList();
    }

    renderItem(poi) {
        return <ListItem poi={poi} />;
        // console.log(poi);
        // console.log(poi.item.address);
        // return (
        //     <View>
        //         <Text>
        //             {poi.item.address}
        //         </Text>
        //     </View>
        // );
    }

    render() {
        const { poisList, userLocation } = this.props;
        
        const { permission } = userLocation;
        let sortedPoisList = null;
        // console.log('***userLocation: ' + JSON.stringify(userLocation.permission));
        // console.log('***userLocation: ' + JSON.stringify(latitude));
        // console.log('***userLocation: ' + JSON.stringify(longitude));
        // console.log('***userLocation: ' + JSON.stringify(permission));
        if( permission ) {
            console.log('true!!!');
            const { latitude, longitude } = userLocation.location;
            console.log('***userLocation: ' + JSON.stringify(latitude));
            console.log('***userLocation: ' + JSON.stringify(longitude));
             sortedPoisList = getSortedData(latitude, longitude, poisList, permission);
        } else {
            console.log('false!!!');
             sortedPoisList = getSortedData(0, 0, poisList, permission);
        }
        // console.log('***sortedPoisList: ' + JSON.stringify(sortedPoisList));
        // console.log('***updatedAndSortedArray: ' + JSON.stringify(sortedPoisList.updatedAndSortedArray));
        // console.log('***distanceFromDiviceComparator: ' + JSON.stringify(sortedPoisList.distanceFromDiviceComparator));
        
        // console.log('22userLocation: ' + JSON.stringify(userLocation));
        // console.log('22poisList: ' + JSON.stringify(poisList));
        // console.log('22coords: ' + JSON.stringify(userLocation.location));
        // console.log('22permission: ' + JSON.stringify(userLocation.permission));
        
        return (
        //   <View>
            // {poisList.map((poi) => (
            //   <Text>{poi.address}</Text>
            // ))}
    
        <FlatList 
            data={sortedPoisList}
            renderItem={this.renderItem}
            keyExtractor={(poi => poi.id)}
        />
    
        //   </View>
        );
      }
}

// const mapStateToProps = state => {
//     return { libraries: state.libraries };
// };

const mapStateToProps = state => ({
    poisList: state.poisList.poisList,
    userLocation: state.userLocation.userLocation
});

const ActionCreators = Object.assign(
    {},
    poisListActions,
    userLocationActions
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoisList);