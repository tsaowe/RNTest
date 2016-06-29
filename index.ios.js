/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import Pc from './RN/components/piaochuang';

const jumeiapp = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Pc/>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('jumeiapp', () => jumeiapp);
