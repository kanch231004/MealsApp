import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";

const MealItem = props => {
    return(
        <View style = {styles.mealItem}>
            <TouchableOpacity onPress = {props.onSelectMeal}>
                <View style = { {...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground style = {styles.bgImage} source= {{uri: props.imgUrl}}>
                      <View style = {styles.titleContainer}>
                        <Text style = {styles.title}>{props.title}</Text>
                      </View>        
                    </ImageBackground>
                </View>
                <View style = {{...styles.mealRow, ...styles.mealDetail}}>
                  <Text>{props.duration}</Text>
                  <Text>{props.complexity.toUpperCase()}</Text>
                  <Text>{props.affordability.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '95%',
        backgroundColor: '#f5f5f5',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealDetail: {
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      height: '15%',
       alignItems: 'center'

    },
    mealHeader: {
        height: '85%',

    },
    bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end'
    },
    titleContainer: {
      backgroundColor:'rgba(0,0,0,0.5)',
      paddingVertical: 5,
      paddingHorizontal: 12,
    },
    title: {
      fontFamily: 'open-sans-bold',
      color: 'white',
      fontSize: 20,
      textAlign: 'center'
    }
});

export default MealItem;