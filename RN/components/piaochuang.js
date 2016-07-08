/**
 * Created by tsaowe on 16/6/29.
 */
var React = require('react');
var ReactNative = require('react-native');
let {ScrollView, Text, StyleSheet, View, TouchableOpacity, Dimensions, LayoutAnimation} = ReactNative;

const list = [
    '首页',
    '六月明星月',
    '极速免税店',
    '母婴',
    '轻奢',
    '食品',
    '服装',
    '鞋包',
    '首页',
    '六月明星月',
    '极速免税店',
    '母婴',
    '轻奢',
    '食品',
    '服装',
    '鞋包'
];


import colors from '../common/color';

let {width} = Dimensions.get('window');


const generateX = (windowWidth, widths, Xs, index)=> {
    let maxX = widths.reduce((a, b)=>(a + b)) - windowWidth;
    let minX = 0;
    let currentElementCenterX = Xs[index] + widths[index] / 2;
    let elementScrollX = currentElementCenterX - windowWidth / 2;
    let left = elementScrollX;
    if (elementScrollX < minX) {
        left = 0;
    }
    if (elementScrollX > maxX) {
        left = maxX;
    }
    return left;
};


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f9f9f9',
        paddingTop: 7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 2,
        shadowOpacity: .3
    },
    text: {
        fontSize: 15,
        color: '#838383',
        height: 22

    },
    innerView: {
        paddingLeft: 10,
        paddingRight: 10
    },
    touchable: {},
    touchableHighLight: {
        //borderBottomWidth:2,
        //borderBottomColor:colors.JMRed
    },
    container: {
        height: 31,
        transform: [{'translate': [0, 0, 1]}]
    },
    animationLine: {
        borderBottomWidth: 2,
        borderBottomColor: colors.JMRed,
        position: 'absolute',
        top: 22,
        transform: [{'translate': [0, 0, 1]}],
        borderRadius:1
    }
});

var Component = React.createClass({

    getInitialState: function () {
        return {
            active: 0,
            width: [],
            x: [],
            left: 10,
            lineWidth: 30
        }
    },
    setActive: function (index) {
        this.setState({
            active: index
        });

        setTimeout(function () {
            this.refs.scrollView.scrollTo({
                x: generateX(width, this.state.width, this.state.x, index)
            });
        }.bind(this), 10);

        LayoutAnimation.easeInEaseOut();
        let currentLeft = this.state.x[index] + 10;
        let currentWidth = this.state.width[index] - 20;
        this.setState({
            lineWidth: currentWidth,
            left: currentLeft
        });


    }
    ,
    render: function () {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    keyboardDismissMode="interactive"
                    style={[styles.scrollView]}>
                    {list.map(function (text, i) {
                        return (
                            <TouchableOpacity
                                ref={'T'+i}
                                key={i}
                                onPress={this.setActive.bind(this,i)}
                                onLayout={(event) => {
                                     let {x, y, width, height} = event.nativeEvent.layout;
                                     this.setState(function(state) {
                                            state.width[i] = width;
                                            state.x[i] = x;
                                        });
                                 }}
                                style={[styles.touchable]}>
                                <View style={[styles.innerView]}>
                                    <View style={(i === this.state.active ) ? styles.touchableHighLight:{}}>
                                        <Text
                                            style={[styles.text,((i === this.state.active )? {color : colors.JMRed,transform: [{'scale':1.02}]} : {})]}>{text}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }.bind(this))}
                    <View style={[styles.animationLine,{width:this.state.lineWidth,left:this.state.left}]}/>
                </ScrollView>
            </View>
        );
    },
    componentDidMount: function () {
        var timer = setInterval(()=> {
            if (this.state.x[this.state.active] != undefined) {
                clearInterval(timer);
                let currentLeft = this.state.x[this.state.active] + 10;
                let currentWidth = this.state.width[this.state.active] - 20;
                this.setState({
                    lineWidth: currentWidth,
                    left: currentLeft
                });
                LayoutAnimation.spring();
            }
        }, 100);
    }
});
export default Component;