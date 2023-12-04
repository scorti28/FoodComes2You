import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from './DrawerNavigator';

const AuthStack = createStackNavigator();

export default function AuthFunction() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />

      <AuthStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />

      <AuthStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />

      <AuthStack.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      
    </AuthStack.Navigator>
  );
}