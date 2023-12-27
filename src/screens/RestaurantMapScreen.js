import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0PUMChSqEQc2VsU1RbEB5FuUxxGsu5h8",
    authDomain: "foodcomes2you.firebaseapp.com",
    databaseURL: "https://foodcomes2you.firebaseio.com",
    projectId: "foodcomes2you",
    storageBucket: "foodcomes2you.appspot.com",
    messagingSenderId: "541404345413",
    appId: "1:541404345413:android:520d66e06a7e23afcd5f2c",
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const RestaurantMapScreen = () => {
  // state to hold location
  const [location, setLocation] = useState(false);

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    });
    console.log(location);
  };

  // Function to Store Location in Firebase
  const storeLocationInFirebase = () => {
    try {
      if (location) {
        // Replace 'locations' with your desired Firebase database path
        firebase.database().ref('locations').push({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
        });
        console.log('Location successfully sent to Firebase!');
      } else {
        console.log('Location is not available');
      }
    } catch (error) {
      console.error('Error sending location to Firebase:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Get Location" onPress={getLocation} />
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Send Location" onPress={storeLocationInFirebase} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RestaurantMapScreen;
