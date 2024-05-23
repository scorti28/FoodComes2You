import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import MenuTabContent from './MenuTabContent';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MenuProductsScreen({ navigation, route }) {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (route.params && route.params.restaurant) {
      const restaurantMenu = route.params.restaurant.restaurantMenu;
      const formattedRoutes = Object.keys(restaurantMenu).map((key, idx) => ({
        key: idx.toString(),
        title: key,
        content: restaurantMenu[key]
      }));
      setRoutes(formattedRoutes);

      // Set the index from the route if provided
      if (route.params.selectedIndex !== undefined) {
        setIndex(route.params.selectedIndex);
      }
    } else {
      console.log('Restaurant data is not available');
    }
  }, [route.params]);

  useEffect(() => {
    const restaurantMenu = route.params.restaurant.restaurantMenu;
    const formattedRoutes = Object.keys(restaurantMenu).map((key, idx) => ({
      key: idx.toString(),
      title: key,
      content: restaurantMenu[key]
    }));
    setRoutes(formattedRoutes);
  }, []);

  const renderScene = ({ route }) => {
    if (!route.content) return null;
    return (
      <MenuTabContent
        menuItems={route.content.items}
        navigation={navigation}
      />
    );
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#FFFFFF' }} // this assumes white is a good contrast for visibility
      style={{ backgroundColor: colors.buttons, elevation: 0, shadowOpacity: 0 }} // no shadow
      labelStyle={{ color: '#FFFFFF', fontWeight: 'bold' }} // white labels, bold text
      scrollEnabled={true}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          name="arrow-left-circle"
          type="material-community"
          color= '#FFFFFF'
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text1}>Menu</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: SCREEN_WIDTH }}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  container: { flex: 1, top: 0, left: 0, right: 0 },

  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text1: {
    fontWeight: 'bold',
    marginLeft: 40,
    color: '#ffffff',
    fontSize: 18,
  },

  view2: {
    marginTop: 5,
    paddingBottom: 20,
  },

  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: 'space-between',
    // alignItems:"center"
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },

  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },

  scene2: { backgroundColor: '#3a8bb7' },
});