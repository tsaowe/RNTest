/**
 * Created by tsaowe on 16/6/30.
 */
var React = require('react');
var ReactNative = require('react-native');
let {ScrollView, Text, StyleSheet, View, TouchableOpacity, Alert, Image, Dimensions, StatusBar, Animated, LayoutAnimation, TouchableHighlight} = ReactNative;

let {width} = Dimensions.get('window');

// 设定每行应该显示几个商品
let columnNumber = width < 400 ? 2 : (width < 500 ? 3 : 4);

// 模块之间的间隙,到手机边缘的间隙宽度
let margin = 4;
let columnWidth = Math.floor(width / columnNumber);

// 原始图片的宽高比例
let widthCompareHeight = .75;

// 因为 margin 存在两边, 所以要乘以 2
let contentWidth = columnWidth - margin * 2;

// 中间的已售光宽度
let soldOutSize = Math.floor(contentWidth / 3);


// styles
const styles = StyleSheet.create({
    productImage: {
        width: contentWidth,
        height: contentWidth / widthCompareHeight,
        borderRadius: 1
    },
    soldOut: {
        height: soldOutSize,
        width: soldOutSize,
        borderRadius: soldOutSize / 2,
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: soldOutSize,
        top: 1.5 * soldOutSize
    },
    soldOutText: {
        color: '#fff',
        fontSize: soldOutSize / 4
    },
    container: {
        width: contentWidth,
        height: contentWidth / widthCompareHeight + 2 * contentWidth / 4,
        marginTop: margin,
        marginBottom: margin
    },
    titleAndPrice:{
        height:2 * contentWidth / 4,
        width:contentWidth,
        justifyContent:'space-between'
    },
    textTitle:{
        color:'#333',
        fontSize:contentWidth / 11,
        position:'relative',
        top:5
    },
    priceView:{
        position:'relative',
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    textPrice:{
        color:'#333',
        fontSize:contentWidth / 8
    },
    textPriceDelete:{
        color:'#999',
        fontSize:contentWidth / 15,
        marginLeft:10,
        textDecorationLine:'line-through',
        position:'relative',
        top:-3
    },
    titleView:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    bold:{
        fontWeight:'bold'
    }
});


export default React.createClass({
    render: function () {
        return (
            <TouchableOpacity
                onPress={Alert.alert.bind(this,'title','123')}
            >
                <View style={ styles.container }>
                    <Image
                        defaultSource={require('./Thumbnails/default.png')}
                        source={{uri:'http://p2.jmstatic.com/product/002/225/2225027_std/2225027_pop_375_500_1.jpg'}}
                        style={styles.productImage}/>

                    <View style={styles.soldOut}>
                        <Text style={styles.soldOutText}>已抢光</Text>
                    </View>
                    <View style={styles.titleAndPrice}>
                        <Text style={styles.textTitle}>
                            <Text style={[styles.bold]}>5.8折/</Text>
                            预售商品嘲讽ing,孙曦干爽纸尿布M124片
                        </Text>
                        <View style={styles.priceView}>
                            <Text style={styles.textPrice}>¥ 123.00</Text>
                            <Text style={styles.textPriceDelete}>¥123.00</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});