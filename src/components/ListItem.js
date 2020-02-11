import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// import * as actions from '../actions';

class ListItem extends Component {
    // componentWillUpdate() {
    //     LayoutAnimation.spring();
    // }

    // renderDescription() {
    //     const { library, expanded } = this.props;

    //     if (expanded) {
    //         return (
    //             <CardSection>
    //                 <Text style={{ flex: 1 }}>
    //                     {library.item.description}
    //                 </Text>
    //             </CardSection>
    //         );
    //     }
    // }

    render() {
        const { textStyle, containerStyle } = styles;
        const { address } = this.props.poi.item;

        return (
            // <TouchableWithoutFeedback
            //     onPress={() => this.props.selectLibrary(id)}
            // >
                <View style={containerStyle}>
                    <Text style={textStyle}>
                        {address}
                    </Text>
                </View>
            // </TouchableWithoutFeedback>
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

// const mapStateToProps = (state, ownProps) => {
//     const expanded = state.selectedLibraryId === ownProps.library.item.id;

//     return { expanded };
// };

// export default connect(mapStateToProps, actions)(ListItem);

export default ListItem;