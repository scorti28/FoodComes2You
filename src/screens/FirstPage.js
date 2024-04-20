import React, {useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import {restaurantsData} from '../global/Data';
import { DataComponent } from '../global/firebaseHelper';


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

const FirstPage = ({navigation}) => {
    // state to hold location
  const [location, setLocation] = useState(true);
  const [locationReady, setLocationReady] = useState(false);

  const { newVector_ids, newVector_images, newVector_names } = DataComponent();

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
          setLocationReady(true); // Location is ready
          
          //Wait for 2 seconds (adjust the time as needed)
          setTimeout(() => {
            handleLocationUpdate();
          }, 4000);
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
}, []);

const handleLocationUpdate = () => {
  if (!locationReady) return; // Exit if location is not ready yet

  const scheme = 'geo:0,0?q=';
  const latLng = `${location.coords.latitude}, ${location.coords.longitude}`;
  const label = 'Custom Label';
  const url = `${scheme}${latLng}(${label})`;

  sortDistance();

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
  }

const combineLocationHandler = () => {
    handleLocationUpdate();
    storeLocationInFirebase();
};


const getDistance = (lattitude1, longittude1, lattitude2, longittude2) =>
{
    const toRadian = n => (n * Math.PI) / 180

    let lat2 = lattitude2
    let lon2 = longittude2
    let lat1 = lattitude1
    let lon1 = longittude1

    console.log(lat1, lon1+"==="+lat2, lon2)
    let R = 6371  // km
    let x1 = lat2 - lat1
    let dLat = toRadian(x1)
    let x2 = lon2 - lon1
    let dLon = toRadian(x2)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    
    return d.toFixed(1);
}

const sortDistance = () => {
    //Iterate over restaurantsData and sort by latitude and longitude to get the distance
    restaurantsData.forEach((item) => {
        const distance = getDistance(location.coords.latitude, location.coords.longitude, item.coordinates.lat, item.coordinates.lng);
        item.farAway = parseFloat(distance);
    });
    //Sort the restaurantsData by distance ascending
    restaurantsData.sort((a, b) => a.farAway - b.farAway);
    restaurantsData.forEach((item) => {
        console.log("-------------------------------------------------");
        console.log(item);
    });
}

        return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
              combineLocationHandler(); navigation.navigate("HomeScreen")}}>
                <Text style={styles.buttonText}>Near you</Text>
            </TouchableOpacity>
            <View style={{ width: 10 }} /> 
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("TagsScreen")}}>
                <Text style={styles.buttonText}>Tags</Text>
            </TouchableOpacity>
            </View>
        </View>
        );
    }

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
},
button: {
    backgroundColor: '#48dba3',
    padding: 20,
    borderRadius: 5,
},
buttonText: {
    color: 'white',
    fontSize: 16,
},
});

export default FirstPage;