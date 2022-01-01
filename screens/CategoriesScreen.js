import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { FlatList } from "react-native";
import  CategoryGridTile from "../components/CategoryGridTile";
import Colors from "../consts/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title = {itemData.item.title}
                color = {itemData.item.color}
                onSelect = {
                    () => { props.navigation.navigate( {
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }
             }/>
        );
    };
    return(
        <FlatList data  = {CATEGORIES} renderItem = {renderGridItem} numColumns = {2}/>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;