import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const CategoriesScreen = props => {
    return(<View style = {styles.screen}>
        <Text>The CategoriesScreen! </Text>
        <Button title = "Go to meals!" onPress = { () => {
            props.navigation.navigate({routeName: 'CategoryMeals'});
        }}></Button>
    </View>);
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        margin: 15,
    }
});

export default CategoriesScreen;