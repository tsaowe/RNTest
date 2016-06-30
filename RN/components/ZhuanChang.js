/**
 * Created by tsaowe on 16/6/30.
 */

import React from 'react';
import {
    StatusBar,
    View
} from 'react-native';

import Piaochuang from './piaochuang';
import List from './listView';

import GoTop from './goTop';

export default React.createClass({
    render: function () {
        return (
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <Piaochuang />
                <List/>
                <GoTop/>
            </View>
        );
    }
});
