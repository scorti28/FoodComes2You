import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';

export default function MyAccountScreen(){
    return(
        <View style={styles.myAccount}>
            <Text>My Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myAccount:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})