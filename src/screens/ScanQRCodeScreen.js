import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function ScanQRCodeScreen({ navigation }) {
  const goToRestaurant = (e) => {
    // Scan QR Code here
    console.log("Am intrat!!!" + e.data);
    // Find id FROM!!!! QR Code HERE!!!
    const index = e.data;

    // Redirect to proper restaurant using id found at line 7-8, not above!
    this.scanner.reactivate();
    navigation.navigate("RestaurantHomeScreen", { id: index, restaurant: restaurantsData[index].restaurantName });
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        reactivate={true}
        ref={(node) => { this.scanner = node }}
        onRead={goToRestaurant}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
    fontSize: 18,
  },
  textBold: {
    fontWeight: 'bold',
  },
  buttonTouchable: {
    padding: 16,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
