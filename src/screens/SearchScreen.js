import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';

export default function MySearchScreen(){
    return(
        <View style={styles.search}>
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    search:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})