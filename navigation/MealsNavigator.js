import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import { createBottomTabNavigator} from "react-navigation-tabs";
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

// const MealsFavTabNavigator = createBottomTabNavigator({
//         Meals: MealsNavigator,
//         Favorites: FavoriteScreen
//     });

export default createAppContainer(MealsNavigator);