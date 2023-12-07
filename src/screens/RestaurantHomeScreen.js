import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantHeader from '../components/RestaurantHeader'

export default function RestaurantHomeScreen({navigation, route}) {
  
  const {id, restaurant} = route.params


  return (
    <View>
        <RestaurantHeader id={id} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({

})