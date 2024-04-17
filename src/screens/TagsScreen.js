import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { restaurantsData } from '../global/Data';
import RestaurantHomeScreen from './RestaurantHomeScreen';
import { filterData } from '../global/Data';

const TagsScreen = ({navigation}) => {
  
  const [checkedFacilities, setCheckedFacilities] = useState({});
  const [checkedFoodTypes, setCheckedFoodTypes] = useState({});

  // Initialize checkbox state for food types
    useState(() => {
    const initialState = filterData.reduce((acc, foodType) => {
      acc[foodType.name] = false;
      return acc;
    }, {});
    setCheckedFoodTypes(initialState);
  }, []);
  
  // Handler for toggling checkbox state for food types
  const handleFoodTypeToggle = foodType => {
    setCheckedFoodTypes({
      ...checkedFoodTypes,
      [foodType]: !checkedFoodTypes[foodType]
    });
  };

  const filterAndSortRestaurants = () => {
    const chosenFacilities = Object.entries(checkedFacilities)
      .filter(([key, value]) => value)
      .map(([key]) => key);
      console.log("@@@1")
      console.log(chosenFacilities)
  
    const chosenFoodTypes = Object.entries(checkedFoodTypes)
      .filter(([key, value]) => value)
      .map(([key]) => key);
  
    // Sort restaurants based on the number of matched facilities and food types
      restaurantsData.sort((a, b) => {
      const countA = chosenFacilities.reduce((acc, facility) => acc + (a.facility1 === facility || a.facility2 === facility || a.facility3 === facility), 0);
      const countB = chosenFacilities.reduce((acc, facility) => acc + (b.facility1 === facility || b.facility2 === facility || b.facility3 === facility), 0);
  
      const foodCountA = chosenFoodTypes.reduce((acc, foodType) => acc + (a.foodType1 === foodType || a.foodType2 === foodType || a.foodType3 === foodType), 0);
      const foodCountB = chosenFoodTypes.reduce((acc, foodType) => acc + (b.foodType1 === foodType || b.foodType2 === foodType || b.foodType3 === foodType), 0);
  
      // Sort by facilities first, then by food types
      if (countB !== countA) {
        return countB - countA;
      } else {
        return foodCountB - foodCountA;
      }
    });
  
    return restaurantsData;
  };

  // Extract all facilities from restaurantsData
  const facilities = restaurantsData.flatMap(restaurant => [
    restaurant.facility1,
    restaurant.facility2,
    restaurant.facility3
  ]);

  // Filter out duplicates and remove empty values
  const uniqueFacilities = [...new Set(facilities)].filter(Boolean);

  // Initialize checkbox state
  useState(() => {
    const initialState = uniqueFacilities.reduce((acc, facility) => {
      acc[facility] = false;
      return acc;
    }, {});
    setCheckedFacilities(initialState);
  }, []);

  // Handler for toggling checkbox state
  const handleCheckboxToggle = facility => {
    setCheckedFacilities({
      ...checkedFacilities,
      [facility]: !checkedFacilities[facility]
    });
  };

  const handleSearch = () => {
    filterAndSortRestaurants();
    console.log("--------------------------------");
    console.log("Filtered and Sorted Restaurants:");
    console.log(restaurantsData);
    navigation.navigate("HomeScreen");
  };


  return (
    <View style={styles.container}>
      {filterData.map(foodType => (
  <CheckBox
    key={foodType.id}
    title={`${checkedFoodTypes[foodType.name] ? 'Remove' : 'Add'} ${foodType.name}`}
    iconRight
    iconType="material"
    checkedIcon="clear"
    uncheckedIcon="add"
    checkedColor="red"
    checked={checkedFoodTypes[foodType.name]}
    onPress={() => handleFoodTypeToggle(foodType.name)}
  />
))}

    {restaurantsData.flatMap(restaurant => [restaurant.facility1, restaurant.facility2, restaurant.facility3])
        .filter((facility, index, self) => facility && self.indexOf(facility) === index) // Remove duplicates and empty values
        .map(facility => (
          <CheckBox
            key={facility}
            title={`${checkedFacilities[facility] ? 'Remove' : 'Add'} ${facility}`}
            iconRight
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="add"
            checkedColor="red"
            checked={checkedFacilities[facility]}
            onPress={() => handleCheckboxToggle(facility)}
          />
        ))}

      
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#48dba3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default TagsScreen;
