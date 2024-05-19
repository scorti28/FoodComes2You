import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Route1, Route2, Route3, Route4 } from './MenuTabs';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';
import { menusData } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MenuProductsScreen({ navigation, route }) {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

useEffect(() => {
  const fetchDataAndLocation = async () => {
    const data = await restaurantMenuExtractor();
    setRestaurantData(data);
  }
  fetchDataAndLocation();
}, []);

  // Update routes when menuData changes
  useEffect(() => {
    if (restaurantData.length > 0) {
      setRoutes(restaurantData.restaurantMenu);
    }
  }, [restaurantData.restaurantMenu]);


  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.cardbackground }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <Route1 navigation={navigation} />
      case '2':
        return <Route2 navigation={navigation} />
      case '3':
        return <Route3 navigation={navigation} />
      case '4':
        return <Route4 navigation={navigation} />
      default:
        return null;
    }
  };

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
