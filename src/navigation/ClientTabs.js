import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import HomeScreen from '../screens/HomeScreen';
import MySearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import { ClientStack } from './ClientStack';
import ScanQRCodeScreen from '../screens/ScanQRCodeScreen';
import FirstPage from '../screens/FirstPage';

const Stack = createStackNavigator();
const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
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
        name="SearchScreen"
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
