/**
 * Created by tsaowe on 16/6/30.
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Image,
    ListView,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} = ReactNative;
let { width} = Dimensions.get('window');
let goTopWidth = width / 6;

import Product from './product';


var GoTop = React.createClass({

    render: function () {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={.7}>
                <View style={[goTopStyles.container,goTopStyles.image]}>
                    <Image style={goTopStyles.image} source={{uri:'http://mp3.jmstatic.com/q_80/jm_img/gotop.png'}}/>
                </View>
            </TouchableOpacity>
        );
    }

});

var ListViewGridLayoutExample = React.createClass({


    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return {
            dataSource: ds.cloneWithRows(this._genRows({}))
        };
    },
    render: function () {
        return (
            <ListView
                ref="list"
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                initialListSize={21}
                pageSize={2}
                scrollRenderAheadDistance={500}
                renderRow={this._renderRow}
            />
        );
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



const halfScreen = (width / 2) - 6;

var styles = StyleSheet.create({
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 3,
        width: halfScreen,
        height: halfScreen,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    thumb: {
        width: 64,
        height: 64
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    }
});

const goTopStyles = StyleSheet.create({

    image: {
        width: goTopWidth,
        height: goTopWidth,
        borderRadius: goTopWidth / 2
    },
    container: {
        position:'absolute',
        bottom:goTopWidth,
        transform: [{'translate': [0, 0, 1]}],
        right:goTopWidth * .6
    }
});



export default ListViewGridLayoutExample;