import { StyleSheet, Text, View, Button, AppRegistry, TouchableOpacity, Linking } from 'react-native';
import React, {Component} from 'react';
import { restaurantsData } from '../global/Data';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function ScanQRCodeScreen({navigation}) {
    
    const goToRestaurant = (e) => {
        //Scan QR Code here
        console.log("Am intrat!!!" + e.data)
        //find id FROM!!!! QR Code HERE!!!
        index=0;

        //redirect to propper restaurant using id found at line 7-8, not above!
        this.scanner.reactivate()
        navigation.navigate("RestaurantHomeScreen", {id:index, restaurant:restaurantsData[index].restaurantName})
      };

  return (
    <View>
      <Text>ScanQRCodeScreen</Text>
      <View style={styles.buttonContainer}>
        <QRCodeScanner 
            reactivate={true}
            ref={(node) => { this.scanner = node }}
            onRead={goToRestaurant}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                your computer and scan the QR code.
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
        
        
        />
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