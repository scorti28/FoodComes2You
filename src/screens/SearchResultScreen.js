import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import SearchResultCard from '../components/SearchResultCard'

export default function SearchResultScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>SearchResultScreen for {route.params.item}</Text>

      <SearchResultCard />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})