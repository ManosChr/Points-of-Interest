import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import ClusteredMapView from "react-native-maps-super-cluster";

import { COORDS, INITIAL_POSITION } from "./Data";

export default function PoisMap() {
  renderMarker = data => (
    <MapView.Marker key={data.location.latitude} coordinate={data.location} />
  );

  return (
    <ClusteredMapView
      style={{
        ...StyleSheet.absoluteFillObject
      }}
      accessor={m => m.location}
      data={COORDS}
      initialRegion={INITIAL_POSITION}
      renderMarker={this.renderMarker}
    />
  );
}