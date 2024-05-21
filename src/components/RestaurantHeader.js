import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const RestaurantHeader = ({ navigation, image, route }) => {
  const [liked, setLiked] = useState(false);
  const fromHomeScreen = route.params?.fromHomeScreen;

  const likeHandler = () => {
    setLiked(!liked);
  };

  const goBackHandler = () => {
    if (fromHomeScreen) {
      navigation.navigate("HomeScreen");  
    } else {
      navigation.goBack();  
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.heartButton} onPress={likeHandler}>
        <Icon name={liked ? 'favorite' : 'favorite-border'} type="material" color={liked ? "#48dba3" : "#ffffff"} size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowButton} onPress={goBackHandler}>
        <Icon name="arrow-left" type="material-community" color="#000000" size={25} />
      </TouchableOpacity>
      <ImageBackground style={styles.image} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
    position: 'relative',
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    borderRadius: 15,
    overflow: 'hidden',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  arrowButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
});

export default RestaurantHeader;
