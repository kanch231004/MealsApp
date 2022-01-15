import React from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from '@expo/vector-icons';
import Colors from "../consts/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

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

const MealsFavTabNavigator = createBottomTabNavigator({
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name ='ios-restaurant'
                    size = {25} color = {tabInfo.tintColor}/>;
                }
            }
        },
        Favorites: {
            screen: FavoriteScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name ='ios-star'
                    size = {25} color = {tabInfo.tintColor}/>;
                }
            }
        }
    }, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

export default createAppContainer(MealsFavTabNavigator);