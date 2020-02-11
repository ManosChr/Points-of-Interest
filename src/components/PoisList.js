import React, { Component } from 'react';
import { FlatList, Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as poisListActions from '../actions/poisListActions';
import ListItem from './ListItem';

class PoisList extends Component {
    

    // render() {
    //     return (
            // <FlatList 
            //     data={this.props.libraries}
            //     renderItem={this.renderItem}
            //     keyExtractor={(library => library.id)}
            // />
    //     );
    // }

    componentDidMount() {
        let { actions } = this.props;
        actions.getUserLocation();
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

        console.log('userLocation: ' + userLocation);
        console.log('userLocation: ' + userLocation.location);
        console.log('userLocation: ' + userLocation.permission);
        // console.log('props3: '+this.props);
        // console.log('props4: '+this.props.poisList);
        // console.log('pois list: '+poisList);
        // console.log('pois list id: '+poisList[0].address);
        return (
        //   <View>
            // {poisList.map((poi) => (
            //   <Text>{poi.address}</Text>
            // ))}
    
        <FlatList 
            data={poisList}
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