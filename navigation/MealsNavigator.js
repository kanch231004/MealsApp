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

const MealsNavigator = createStackNavigator(
    {
        Categories: { 
            screen: CategoriesScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                },
                headerTintColor: 'white'
            }
        },
        CategoryMeals: { 
            screen: CategoryMealsScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                },
                headerTintColor: 'white'
            }
        },
        MealDetail: MealsDetailsScreen
    }, {
        defaultNavigationOptions:  {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }
);

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
            screen: FavoriteScreen,
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