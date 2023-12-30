import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, PermissionsAndroid, Linking } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import Header from '../components/Header';

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

//export var secondaryApp = firebase.initializeApp(firebaseConfig, "Secondary");

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

const RestaurantMapScreen = ({navigation}) => {
  // state to hold location
  const [location, setLocation] = useState(true);

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
  
            // Wait for 2 seconds (adjust the time as needed)
          //   setTimeout(() => {
          //     handleLocationUpdate();
          //   }, 4000);
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
  };

  useEffect(() => {
    getLocation();
  }, [])
  
  const handleLocationUpdate = () => {
    const scheme = 'geo:0,0?q=';
    const latLng = `${location.coords.latitude}, ${location.coords.longitude}`;
    const label = 'Custom Label';
    const url = `${scheme}${latLng}(${label})`;
  
    Linking.openURL(url);
  
    console.log(location);
  };

  // Function to Store Location in Firebase
  const storeLocationInFirebase = () => {
    try {
      const user = auth().currentUser;
      if (user) {  // Check if user is not undefined before accessing properties
        if (location) {
          const update = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timestamp: firebase.database.ServerValue.TIMESTAMP
          };

          //firebase.auth().currentUser.updateProfile(update);
          firestore().collection('users').doc(user.uid).update({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
          })

          console.log('Location successfully sent to Firebase!');
        } else {
          console.log('Location is not available');
        }
      } else {
        console.log('User is not authenticated');
      }
    } catch (error) {
      console.error('Error sending location to Firebase:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Header title="Get current location" type="arrow-left-circle" navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.centered}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <View style={styles.buttonContainer}>
            <Button title="Get Location" onPress={handleLocationUpdate} />
          </View>
          {/* <Text>Latitude: {location ? location.coords.latitude : null}</Text>
          <Text>Longitude: {location ? location.coords.longitude : null}</Text> */}
          <View style={styles.buttonContainer}>
            <Button title="Send Location" onPress={storeLocationInFirebase} />
          </View>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20, // Use paddingTop instead of marginTop
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    width: '40%',
  },
});


export default RestaurantMapScreen;
