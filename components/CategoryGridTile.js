import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View, Text, StyleSheet  } from 'react-native';

const CategoryGridTile = props => {
    let TouchableComp = TouchableOpacity;
    if (Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }

    return (<View style = {styles.gridItem}>
        <TouchableComp  style = {{flex: 1}} 
            onPress = {props.onSelect}>
            <View style = {{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style = {styles.title}>{props.title}</Text>
            </View>
    </TouchableComp>
    </View>)
    
};

const styles = StyleSheet.create( {
    gridItem: {
        margin: 15,
        flex: 1,
        height: 150
    },
    container: {
        flex: 1,
         shadowColor: 'black',
         shadowOpacity: 0.26,
         shadowOffset: {width: 0, height: 2},
         elevation: 3,
         padding: 10,
         justifyContent: 'flex-end',
         alignItems: 'flex-end',
         borderRadius: 10
    
    }, 
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;