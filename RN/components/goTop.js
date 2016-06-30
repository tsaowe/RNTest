/**
 * Created by tsaowe on 16/6/30.
 */

var React = require('react');
var ReactNative = require('react-native');
let {StyleSheet, View, TouchableOpacity, Image, Dimensions} = ReactNative;

let {width} = Dimensions.get('window');
let goTopWidth = width / 6;

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

export default React.createClass({

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

