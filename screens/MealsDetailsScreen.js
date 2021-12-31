import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const MealsDetailsScreen = props => {
    return(<View style = {styles.screen}>
        <Text>The MealsDetailsScreen! </Text>
        <Button title ="Go to Categories" onPress = {
            () => {props.navigation.popToTop();}
        }></Button>
    </View>);
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
         alignItems: 'center'
    }
});

export default MealsDetailsScreen;