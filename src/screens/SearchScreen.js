import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import SearchComponent from '../components/SearchComponent';

export default function MySearchScreen(){
    return(
        <View style={styles.search}>
            <SearchComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    search:{
        
    }
})