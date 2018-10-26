
// Import libraries for making a component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Make a component
const Header = (props) => {
    return (
        <View style={styles.viewsStyle}>
            <Text style={styles.header}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewsStyle: {
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    header: {
        fontSize: 20
    }
});
  

// Make the component available to other parts of the app
export default Header;