import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity,PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract';
import { colors } from '../global/styles';

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

  const [location, setLocation] = useState(true);
  const [locationReady, setLocationReady] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);

useEffect(() => {
  const fetchDataAndLocation = async () => {
    const data = await restaurantMenuExtractor();
    setRestaurantData(data);
    getLocation();
  }
  fetchDataAndLocation();
}, []);


useEffect(() => {
  if (location && restaurantData.length) {
    sortDistance();  
  }
}, [location, restaurantData]);

  
const getLocation = async () => {
  if (await requestLocationPermission()) {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        console.log('Geolocation error:', error);
        setLocation(null);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
};


useEffect(() => {
  getLocation();
}, []);

const handleLocationUpdate = async () => {
  if (!locationReady) 
    return; 

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
      if (user) {  
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

const updateFarAway = async () => {
  for (const restaurant of restaurantData) {
      const distance = getDistance(
          location.coords.latitude,
          location.coords.longitude,
          restaurant.coordinates.latitude,
          restaurant.coordinates.longitude
      );

      try {
          await firestore().collection('restaurantData').doc(restaurant.docId).update({ farAway: distance });
          console.log(`${restaurant.name} FarAway field successfully updated.`);
      } catch (error) {
          console.error(`Error updating farAway field for ${restaurant.name}:`, error);
      }
  }
}



const sortDistance = () => {
  updateFarAway();
   if (!restaurantData.length) {
     console.log("Restaurant data not available");
     return [];
   }

  const sortedData = restaurantData.sort((a, b) => {
    const distanceA = parseFloat(a.farAway || Infinity); // Treat undefined as infinitely far away
    const distanceB = parseFloat(b.farAway || Infinity);
    return distanceA - distanceB;
  });

  sortedData.forEach(restaurant => {
    console.log(`${restaurant.name}: ${restaurant.farAway || 'Distance not available'} km`);
  });

  sortedData.forEach(restaurant => {
    console.log("@@@@@@@@@@@@@@@@@@@@@", restaurant);
    console.log("------------------------------------------------")
  })
//console.log("Sorted data:", sortedData);

  return sortedData;
};
  
return (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.containerText}>Welcome to FoodComes2You!{"\n"}Please choose the preferred option.</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={async () => {
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
textContainer: {
  marginBottom: 20,
},
containerText: {
    textAlign: 'center',
    marginBottom: 20,
    color: colors.buttons,
    marginBottom: 20,
    fontSize: 20,
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
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