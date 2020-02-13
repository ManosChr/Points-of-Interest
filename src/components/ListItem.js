import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Listitem Component - Renders each poi
class ListItem extends Component {
    render() {
        const { textStyle, containerStyle } = styles;
        const { address, distance } = this.props.poi.item;

        return (
            <View style={containerStyle}>
                <Text style={textStyle}>
                    {address} - {distance.toFixed(2)} km
                </Text>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
      }
};

export default ListItem;