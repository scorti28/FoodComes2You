import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract';
import { globalData } from '../global/Data';
import { colors } from '../global/styles';

const TagsScreen = ({ navigation }) => {
  const [checkedFacilities, setCheckedFacilities] = useState({});
  const [checkedFoodTypes, setCheckedFoodTypes] = useState({});
  const [restaurantData, setRestaurantData] = useState([]);
  const filterData = globalData();

  useEffect(() => {
    const fetchData = async () => {
      const data = await restaurantMenuExtractor();
      setRestaurantData(data);
      initializeCheckboxStates(data);
    }
    fetchData();
  }, []);

  const initializeCheckboxStates = (restaurants) => {
    const facilities = new Set();
    const foodTypes = new Set();

    restaurants.forEach(restaurant => {
      restaurant.facilities && Object.values(restaurant.facilities).forEach(f => facilities.add(f));
      restaurant.foodCategories && restaurant.foodCategories.forEach(f => foodTypes.add(f));
    });

    setCheckedFacilities(Object.fromEntries([...facilities].map(f => [f, false])));
    setCheckedFoodTypes(Object.fromEntries([...foodTypes].map(f => [f, false])));
  };

  const handleCheckboxToggle = (stateUpdater, key) => {
    stateUpdater(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const filterAndSortRestaurants = () => {
    const chosenFacilities = Object.entries(checkedFacilities).filter(([_, value]) => value).map(([key]) => key);
    const chosenFoodTypes = Object.entries(checkedFoodTypes).filter(([_, value]) => value).map(([key]) => key);

    // Scoring and sorting restaurants
    const scoredRestaurants = restaurantData.map(restaurant => {
      const facilityScore = chosenFacilities.reduce((acc, facility) =>
        acc + (Object.values(restaurant.facilities || {}).includes(facility) ? 1 : 0), 0);
      const foodTypeScore = chosenFoodTypes.reduce((acc, type) =>
        acc + (restaurant.foodCategories.includes(type) ? 1 : 0), 0);
      const totalScore = facilityScore + foodTypeScore;  // Total score based on both categories

      return { ...restaurant, score: totalScore };
    });

    const sortedRestaurants = scoredRestaurants.sort((a, b) => b.score - a.score); // Sorting by total score descending

    // Detailed console logging to show the scores and sorted results
    console.log("Detailed Scores and Sorted Restaurants:");
    sortedRestaurants.forEach((restaurant, index) => {
      console.log(`Rank ${index + 1}: ${restaurant.name} (Score: ${restaurant.score})`);
      console.log(`   Facilities: ${Object.values(restaurant.facilities || {}).join(', ')}`);
      console.log(`   Food Types: ${restaurant.foodCategories.join(', ')}`);
    });

    return sortedRestaurants;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Ce cautati la un restaurant?</Text>
      <View style={styles.newLine}/>
      <View>
        <Text style={styles.categoryHeader}>Tipuri de mancare</Text>
        {Object.keys(checkedFoodTypes).map(foodType => (
          <CheckBox
            key={foodType}
            title={foodType}
            checked={checkedFoodTypes[foodType]}
            onPress={() => handleCheckboxToggle(setCheckedFoodTypes, foodType)}
            style={styles.checkbox}
          />
        ))}
      </View>
      <View>
      <View style={styles.newLine}/>
        <Text style={styles.categoryHeader}>Facilitati</Text>
        {Object.keys(checkedFacilities).map(facility => (
          <CheckBox
            key={facility}
            title={facility}
            checked={checkedFacilities[facility]}
            onPress={() => handleCheckboxToggle(setCheckedFacilities, facility)}
            style={styles.checkbox}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
        const sortedRestaurants = filterAndSortRestaurants();
        console.log("Sorted Restaurants:", sortedRestaurants);
        navigation.navigate("HomeScreen", { sortedRestaurants });
      }}>
        <Text style={styles.buttonText}>Cautare</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.buttons
  },
  newLine: {
    marginVertical: 10,
  },
  categoryHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.buttons
  },
  checkbox: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
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
