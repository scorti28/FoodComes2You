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
        content: Object.keys(restaurantMenu[key]).map(itemKey => ({
          name: itemKey,
          ...restaurantMenu[key][itemKey]
        }))
      }));
      setRoutes(formattedRoutes);

      if (route.params.selectedIndex !== undefined) {
        setIndex(route.params.selectedIndex);
      }
    } else {
      console.log('Restaurant data is not available');
    }
  }, [route.params]);

  const renderScene = ({ route }) => {
    if (!route.content) return null;
    return (
      <MenuTabContent
        menuItems={route.content}
        navigation={navigation}
      />
    );
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#FFFFFF' }}
      style={{ backgroundColor: colors.buttons, elevation: 0, shadowOpacity: 0 }}
      labelStyle={{ color: '#FFFFFF', fontWeight: 'bold' }}
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
  scene: {
    flex: 1,
  },
  scene2: { backgroundColor: '#3a8bb7' },
});
