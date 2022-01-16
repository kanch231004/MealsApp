import {React} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from './MealItem';

const MealList = props => {
    const renderMealItem = itemData => {
        return <MealItem 
            title = {itemData.item.title}
            duration = {itemData.item.duration}
            onSelectMeal = { () => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id
                    }
                });
            }}
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            imgUrl = {itemData.item.imageUrl}/>
    };

    return (<View style = {styles.list}>
        <FlatList 
            data = {props.listDataMeals}
             keyExtractor = {(item, index) => item.id}
             renderItem = {renderMealItem}
             style = {{width : '100%'}}
        />
    </View>);
}

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent: 'center',
         alignItems: 'center',
         padding: 15
    }
});

export default MealList;