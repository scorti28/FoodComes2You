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

function MainScreen() {
  return (
    <ClientTabs.Navigator tabBarOptions={{ activeTintColor: colors.buttons }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
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

export default function RootClientTabs() {
    const [firstPageShown, setFirstPageShown] = useState(true);
  
    return (
      <Stack.Navigator headerMode="none">
        {firstPageShown ? (
          <Stack.Screen name="FirstPage">
            {props => <FirstPage {...props} setFirstPageShown={setFirstPageShown} navigation={props.navigation} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MainScreen" component={MainScreen} />
        )}
      </Stack.Navigator>
    );
  }
