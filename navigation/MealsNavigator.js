import React, { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from '@expo/vector-icons';
import Colors from "../consts/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"

const defaultStackNavOptions =  {
        defaultNavigationOptions:  {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }

const MealsNavigator = createStackNavigator(
    {
        Categories: { 
            screen: CategoriesScreen,
            navigationOptions: defaultStackNavOptions
        },
        CategoryMeals: { 
            screen: CategoryMealsScreen,
            navigationOptions: defaultStackNavOptions
        },
        MealDetail: MealsDetailsScreen
    },
);

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealsDetailsScreen
}, defaultStackNavOptions)

const tabScreenConfig = {
     Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name ='ios-restaurant'
                    size = {25} color = {tabInfo.tintColor}/>;
                },
                 tabBarColor: Colors.primaryColor
            }
        },
        Favorites: {
            screen: FavNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name ='ios-star'
                    size = {25} color = {tabInfo.tintColor}/>;
                },
                tabBarColor: Colors.accentColor
            }
        }
    };


const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    tabScreenConfig, {
        activeTintColor: 'white',
        shifting : true
    }
):
createBottomTabNavigator({
        tabScreenConfig,
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

export default createAppContainer(MealsFavTabNavigator);