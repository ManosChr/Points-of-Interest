import React, { Component } from 'react';
import { FlatList, Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as poisListActions from '../actions/poisListActions';

class PoisList extends Component {
    // renderItem(library) {
    //     return <ListItem library={library} />;
    // }

    // render() {
    //     return (
    //         <FlatList 
    //             data={this.props.libraries}
    //             renderItem={this.renderItem}
    //             keyExtractor={(library => library.id)}
    //         />
    //     );
    // }

    render() {
        const { poisList } = this.props;
        console.log(poisList);
        return (
          <View>
            {poisList.map((poi) => (
              <Text>{poi.address}</Text>
            ))}
    
    
          </View>
        );
      }
}

// const mapStateToProps = state => {
//     return { libraries: state.libraries };
// };

const mapStateToProps = state => ({
    poisList: state.poisList.poisList,
});

const ActionCreators = Object.assign(
    {},
    poisListActions,
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoisList);