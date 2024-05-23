import React, { useState, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { colors, darkColors } from '../global/styles'; // Import colors for dark mode
import HomeScreen from '../screens/HomeScreen';
import MyOrdersScreen from '../screens/AboutUs';
import FirstPage from '../screens/FirstPage';
import TagsScreen from '../screens/TagsScreen';
import MySearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/restaurantScreens/RestaurantHomeScreen';
import MenuProductsScreen from '../screens/MenuProductsScreen';
import { ThemeContext } from '../global/themeContext'; // Import ThemeContext

const ClientTabs = createBottomTabNavigator();
const ClientStack = createStackNavigator();
const HomeStack = createStackNavigator();

// Stack pentru navigarea Home
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="RestaurantHomeScreen" 
        component={RestaurantHomeScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="MenuProductsScreen" 
        component={MenuProductsScreen} 
        options={{ headerShown: false }} 
      />
    </HomeStack.Navigator>
  );
}

// Stack pentru Search
function ClientStackNavigator() {
  return (
    <ClientStack.Navigator>
      <ClientStack.Screen 
        name="SearchScreen" 
        component={MySearchScreen} 
        options={{ headerShown: false }} 
      />
      <ClientStack.Screen 
        name="SearchResultScreen" 
        component={SearchResultScreen} 
        options={{ headerShown: false }} 
      />
      <ClientStack.Screen 
        name="RestaurantHomeScreen" 
        component={RestaurantHomeScreen} 
        options={{ headerShown: false }} 
      />
      <ClientStack.Screen 
        name="MenuProductsScreen" 
        component={MenuProductsScreen} 
        options={{ headerShown: false }} 
      />
    </ClientStack.Navigator>
  );
}

// Tab-ul principal al clientului
function RootClientTabs() {
  const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext to get dark mode state
  const currentColors = isDarkMode ? darkColors : colors; // Determine current colors

  return (
    <ClientTabs.Navigator tabBarOptions={{ activeTintColor: currentColors.buttons }}>
      <ClientTabs.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          headerShown: false,
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <ClientTabs.Screen
        name="TagsScreen"
        component={TagsScreen}
        options={{
          headerShown: false,
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Acasă",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home-circle"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="SearchScreenButton"
        component={ClientStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Caută",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="search-web"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Despre noi",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="information-variant"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}

export default RootClientTabs;
