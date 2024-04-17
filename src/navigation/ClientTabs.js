import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import HomeScreen from '../screens/HomeScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import ScanQRCodeScreen from '../screens/ScanQRCodeScreen';
import FirstPage from '../screens/FirstPage';
import TagsScreen from '../screens/TagsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MySearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProductsScreen from '../screens/MenuProductsScreen';
import PreferenceScreen from '../screens/PreferenceScreen';

const ClientTabs = createBottomTabNavigator();
const ClientSearch = createStackNavigator();

function ClientStack() {
console.log("@@@ClientStack")
return (
  <ClientSearch.Navigator>
      <ClientSearch.Screen 
          name="SearchScreen"
          component={MySearchScreen}
          options={
              () => ({
                  headerShown:false
              })
          }
      />

      <ClientSearch.Screen 
          name="SearchResultScreen"
          component={SearchResultScreen}
          options={
              () => ({
                  headerShown:false
              })
          }
      />
      <ClientSearch.Screen 
          name="RestaurantHomeScreen"
          component={RestaurantHomeScreen}
          options={
              () => ({
                  headerShown:false
              })
          }
      />
      <ClientSearch.Screen 
          name="MenuProductsScreen"
          component={MenuProductsScreen}
          options={
              () => ({
                  headerShown:false
              })
          }
      />
      <ClientSearch.Screen 
          name="PreferenceScreen"
          component={PreferenceScreen}
          options={
              () => ({
                  headerShown:false
              })
          }
      />
      
  </ClientSearch.Navigator>
)
}

function RootClientTabs (){
  console.log("@@@RootClientTabs")
  return (
    <ClientTabs.Navigator tabBarOptions={{ activeTintColor: colors.buttons }}>
      <ClientTabs.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          headerShown: false,
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: {display: "none"}
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
          tabBarStyle: {display: "none"}
        }}
      />
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home-circle"
              type="material-community"
              color={color}
              size={size}
            />
          )
        }}
      />
      <ClientTabs.Screen
        name="SearchScreenButton"
        component={ClientStack}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="search-web"
              type="material-community"
              color={color}
              size={size}
            />
          )
        }}
      />
      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="view-list-outline"
              type="material-community"
              color={color}
              size={size}
            />
          )
        }}
      />
      <ClientTabs.Screen
        name="ScanQRCodeScreen"
        component={ScanQRCodeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Scan QR",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="qrcode-scan"
              type="material-community"
              color={color}
              size={size}
            />
          )
        }}
      />
    </ClientTabs.Navigator>
      );
}

export default RootClientTabs;