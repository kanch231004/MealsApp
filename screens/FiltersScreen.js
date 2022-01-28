import React from "react";
import {View, Text, StyleSheet} from "react-native";

const FiltersScreen = props => {
    return(<View>
        <Text>The FilterScreen! </Text>
    </View>);
};

FiltersScreen.navigationOptions = {
    headerTitle: 'My Filters'
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
         alignItems: 'center'
    }
});

export default FiltersScreen;