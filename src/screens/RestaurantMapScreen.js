import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';

export default function RestaurantMapScreen(){
    return(
        <View style={styles.restaurant}>
            <Text>Restaurant Map Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    restaurant:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})