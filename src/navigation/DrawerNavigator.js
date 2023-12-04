import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} /> } >
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: "Client",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material-community"
              name="home-account"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          )
        }}
      />

    <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          headerShown: false,
          title: "Business console",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material-community"
              name="handshake"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          )
        }}
      />

    </Drawer.Navigator>
  );
}
