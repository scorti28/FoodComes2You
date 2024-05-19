import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract';

const RestaurantHeader = ({ navigation, id, routeName}) => {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const index2 = 10;

  const [restaurantData, setRestaurantData] = useState([]);

useEffect(() => {
  const fetchDataAndLocation = async () => {
    const data = await restaurantMenuExtractor();
    setRestaurantData(data);
  }
  fetchDataAndLocation();
}, []);


  const likeHandler = () => {
    setLiked(!liked);
    setCounter(index2);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: restaurantData.image}}
      >
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Icon
              name="arrow-left"
              type="material-community"
              color="#000000"
              size={25}
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.view3}>
            <Icon
              name={liked && index2 === counter ? 'favorite' : 'favorite-border'}
              type="material"
              color="#48dba3"
              size={30}
              onPress={likeHandler}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  view2: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  view3: {
    marginTop: 0,
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default RestaurantHeader;