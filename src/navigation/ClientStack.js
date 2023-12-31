import { StyleSheet, Text, View } from 'react-native';
import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MySearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductsScreen from '../screens/MenuProductsScreen';
import PreferenceScreen from '../screens/PreferenceScreen';


const ClientSearch = createStackNavigator();

export function ClientStack({navigation, route}) {

  useLayoutEffect( () => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName === "RestaurantHomeScreen" || "MenuProductsScreen"){
        navigation.setOptions({tabBarVisible:false});
    } else { 
        navigation.setOptions({tabBarVisible:true});
    }

  },[navigation, route])

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

        <ClientSearch.Screen 
            name="RestaurantHomeScreen"
            component={RestaurantHomeScreen}
            options={
                () => ({
                    headerShown:false
                })
            }
        />
        
    </ClientSearch.Navigator>
  )
}

const styles = StyleSheet.create({})