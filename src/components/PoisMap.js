import { View, Text, Dimensions } from 'react-native';
import MapView from "react-native-maps";
import ClusteredMapView from "react-native-maps-super-cluster";
import { Marker } from 'react-native-maps'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as poisListActions from '../actions/poisListActions';
import * as userLocationActions from '../actions/userLocationActions';

class PoisMap extends Component {

  // Render marker
  renderMarker = data => (
    <MapView.Marker key={data.location.latitude} coordinate={data.location} />
  );

  // Render Cluster
  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
      coordinate = cluster.coordinate,
      clusterId = cluster.clusterId
    const clusteringEngine = this.map.getClusteringEngine(),
      clusteredPoints = clusteringEngine.getLeaves(clusterId, 100)

    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <View >
          <Text >
            {pointCount}
          </Text>
        </View>
      </Marker>
    )
  };

  render() {

    const { poisList, userLocation } = this.props;
    const { permission } = userLocation;
    
    // If we have location permission render the cluster
    if(permission){
      const { latitude, longitude } = userLocation.location;
      const window = Dimensions.get("window");
      const WIDTH = window.width;
      const HEIGHT = window.height;
      
      const ASPECT_RATIO = WIDTH / HEIGHT;
      const LATITUDE_DELTA = 0.35;
      const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
                   
      const INITIAL_POSITION = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 1,
        longitudeDelta: 1
      };
      
      const COORDS = poisList.map(e => {
        return {
          location: {
            latitude: Number(e.latitude),
            longitude: Number(e.longitude),
            longitudeDelta: LONGITUDE_DELTA,
            latitudeDelta: LATITUDE_DELTA
          }
        };
      })
      
      return (
        <ClusteredMapView
        styles={{ flex: 1 }}
        ref={(r) => { this.map = r }}
        data={COORDS}
        initialRegion={INITIAL_POSITION}
        renderMarker={this.renderMarker}
        renderCluster={this.renderCluster}
        />
        )
      } else{
        return (
          <Text>Location permission denied!!!</Text>
        )
      }
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(PoisMap);
