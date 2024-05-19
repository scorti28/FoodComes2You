import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth';
import '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore";

export const firebaseConfig = {
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

export async function extractDataFromFirebase(){
    const filterData = [];
    const querySnapshot = await firestore().collection('filterData').get();
    
    querySnapshot.forEach((snapshot) => {
      const data = snapshot.data();
      const { name, image, id } = data;
      filterData.push({ name, image, id });
    });

    return filterData;
  }



 

