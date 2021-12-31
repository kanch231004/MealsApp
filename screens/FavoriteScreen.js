import React from "react";
import {View, Text, StyleSheet} from "react-native";

const FavouriteScreen = props => {
    return(<View>
        <Text>The FavouriteScreen! </Text>
    </View>);
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
         alignItems: 'center'
    }
});

export default FavouriteScreen;