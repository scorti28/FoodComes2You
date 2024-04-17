import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import { restaurantsData } from '../global/Data';

const RestaurantHeader = ({ navigation, id, routeName, previousScreen}) => {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const index2 = 10;


  const likeHandler = () => {
    setLiked(!liked);
    setCounter(index2);
  };

  const handleBack = () => {
    // if (fromClientStack) {
    //   // If called from ClientStack, follow the specified path
    //   switch (routeName) {
    //     case 'RestaurantHomeScreen':
    //       navigation.navigate('HomeScreen');
    //       console.log("@@@Called From ClientStack")
    //       break;
    //     case 'MenuProductsScreen':
    //     case 'PreferenceScreen':
    //       navigation.navigate('SearchResultScreen');
    //       break;
    //     default:
    //       navigation.goBack();
    //       break;
    //   }
    // } else {
    //   // If called directly from ClientTabs, redirect to HomeScreen
    //   navigation.navigate('HomeScreen');
    //   console.log("@@@Called From ClientTabs")
    // }

    if(previousScreen == "HomeScreen")
        navigation.navigate('HomeScreen');
    else if(previousScreen == "SearchResultScreen")
        navigation.navigate('SearchResultScreen');
    else {
      console.log("Does not work")
      console.log("@@@RestaurantHomeScreen.previous_screen", previousScreen)
      navigation.goBack()
      
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={restaurantsData[id].images}
      >
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Icon
              name="arrow-left"
              type="material-community"
              color="#000000"
              size={25}
              onPress={handleBack}
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