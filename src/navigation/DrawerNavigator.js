import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  console.log("@@@DrawerNavigator")
  return (
    <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} /> } >
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
        }}
      />

    </Drawer.Navigator>
  );
}
