import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function MyOrdersScreen(){
    return(
        <View style={styles.myOrders}>
            <Text>My Orders</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myOrders:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})