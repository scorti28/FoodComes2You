import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { restaurantsData } from '../global/Data';

export default function ScanQRCodeScreen({navigation}) {
    const goToRestaurant = () => {
        //Scan QR Code here

        //find id FROM!!!! QR Code HERE!!!
        index=0;

        //redirect to propper restaurant using id found at line 7-8, not above!
        navigation.navigate("RestaurantHomeScreen", {id:index, restaurant:restaurantsData[index].restaurantName})
      };

  return (
    <View>
      <Text>ScanQRCodeScreen</Text>
      <View style={styles.buttonContainer}>
            <Button title="Go To Restaurant" onPress={goToRestaurant} />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        width: '40%',
      },
})