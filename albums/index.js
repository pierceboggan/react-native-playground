/** @format */

/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);*/

// Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Attempt to create a component
// Component are javascript functions that return JSX
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

// Attempt to render component to a device
AppRegistry.registerComponent('albums', () => App);