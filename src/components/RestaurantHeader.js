import React, { useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';

const RestaurantHeader = ({ navigation, image }) => {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={{uri: image}}>
        <View style={styles.view1}>
          <Icon name="arrow-left" type="material-community" color="#000000" size={25} onPress={() => navigation.goBack()} />
          <Icon name={liked ? 'favorite' : 'favorite-border'} type="material" color="#48dba3" size={30} onPress={likeHandler} />
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