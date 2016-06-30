/**
 * Created by tsaowe on 16/6/30.
 */

import React from 'react';
var ReactNative = require('react-native');
let {
    StatusBar,
    View,
    Image,
    ListView,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} = ReactNative;

import Piaochuang from './piaochuang';
import Product from './product';


let {width} = Dimensions.get('window');
let goTopWidth = width / 6;


const listViewStyles = StyleSheet.create({
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

const goTopStyles = StyleSheet.create({

    image: {
        width: goTopWidth,
        height: goTopWidth,
        borderRadius: goTopWidth / 2
    },
    container: {
        position: 'absolute',
        bottom: goTopWidth,
        transform: [{'translate': [0, 0, 1]}],
        right: goTopWidth * .6
    }
});


export default React.createClass({

    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return {
            dataSource: ds.cloneWithRows(this._genRows({})),
            top: 0
        };
    },

    render: function () {
        return (
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <Piaochuang />
                <ListView
                    ref="list"
                    contentContainerStyle={listViewStyles.list}
                    dataSource={this.state.dataSource}
                    initialListSize={21}
                    pageSize={2}
                    scrollRenderAheadDistance={500}
                    renderRow={this._renderRow}
                    onScroll={this.handleScroll}
                />
                <TouchableOpacity
                    onPress={this.handleScrollTop}
                    activeOpacity={.7}>
                    <View style={[goTopStyles.container,goTopStyles.image]}>
                        <Image style={goTopStyles.image}
                               source={{uri:'http://mp3.jmstatic.com/q_80/jm_img/gotop.png'}}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },
    handleScrollTop: function () {
        this.refs.list.scrollTo({
            y: 0
        });
    },
    handleScroll: function (event) {
        this.setState(function (state) {
            state.top = event.nativeEvent.contentOffset.y;
        });
    },
    _renderRow: function () {
        return (
            <Product/>
        );
    },
    _genRows: function () {
        var dataBlob = [];
        for (var ii = 0; ii < 30; ii++) {
            dataBlob.push(ii);
        }
        return dataBlob;
    }
});
