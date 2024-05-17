import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth';
import '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore";

// Initialize Firebase
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

 export async function extractMenuFromFirebase(){
   try {
     const menuVector = [];  

     let menuVectorTitles = [];
     let menuVectorKeys = [];

     const querySnapshot = await firestore().collection('menu').get();  
     querySnapshot.forEach((snapshot) => {
      const  {key, title}  = snapshot.data();
      menuVector.push( {key, title} );
     });

     menuVectorKeys = menuVector.map(item => item.key)
     menuVectorTitles = menuVector.map(item => item.title)

     return {menuVectorKeys, menuVectorTitles}

   } catch (error) {
        console.error("Error extracting data from Firebase:", error);
        return []; 
   }
 }

 export async function extractMenuDataFromFirebase(){
  try {
    const menuDataVector = [];

    const querySnapshot = await firestore().collection('menuData').get();
    querySnapshot.forEach((snapshot) => {
      const { key, title, special } = snapshot.data();
      menuDataVector.push({ key, title, special });
    });

    console.log("@@@@@@@@@@@@@@@@@@@@@@@menuDataVector:",menuDataVector); 

    const menuDataVectorKeys = menuDataVector.map(item => item.key);
    const menuDataVectorTitles = menuDataVector.map(item => item.title);
    const menuDataVectorSpecial = menuDataVector.map(item => item.special);

    console.log("@@@@@@@@@@@@@@@@@@@@@@@menuDataVectorKeys:",menuDataVectorKeys, menuDataVectorTitles, menuDataVectorSpecial); 

    return { menuDataVectorKeys, menuDataVectorTitles, menuDataVectorSpecial };

  } catch (error) {
    console.error("Error extracting data from Firebase:", error);
    return { menuDataVectorKeys: [], menuDataVectorTitles: [], menuDataVectorSpecial: [] };
  }
}

export async function extractRestaurantDataFromFirebase() {
  try {
    const restaurantDataVector = [];

    const querySnapshot = await firestore().collection('restaurantData').get();
    querySnapshot.forEach((snapshot) => {
      const { 
        address, averageReview, coordinates, facilities, foodCategories, 
        foodTypes, id, image, name, nrReviews
      } = snapshot.data();

      restaurantDataVector.push({ 
        address, averageReview, coordinates, facilities, foodCategories, 
        foodTypes, id, image, name, nrReviews
      });
    });

    console.log("@@@@@@@@@@@@@@@@@@@@@@@restaurantDataVector:", restaurantDataVector);

    const addresses = restaurantDataVector.map(item => item.address);
    const averageReviews = restaurantDataVector.map(item => item.averageReview);
    const coordinatesVector = restaurantDataVector.map(item => item.coordinates);
    const facilitiesVector = restaurantDataVector.map(item => item.facilities);
    const foodCategoriesVector = restaurantDataVector.map(item => item.foodCategories);
    const foodTypesVector = restaurantDataVector.map(item => item.foodTypes);
    const ids = restaurantDataVector.map(item => item.id);
    const images = restaurantDataVector.map(item => item.image);
    const names = restaurantDataVector.map(item => item.name);
    const nrReviewsVector = restaurantDataVector.map(item => item.nrReviews);

    console.log("@@@@@@@@@@@@@@@@@@@@@@@Sorted Data:", addresses, averageReviews, coordinatesVector, facilitiesVector, foodCategoriesVector, foodTypesVector, ids, images, names, nrReviewsVector);

    return { 
      addresses, averageReviews, coordinatesVector, facilitiesVector, 
      foodCategoriesVector, foodTypesVector, ids, images, names, nrReviewsVector
    };

  } catch (error) {
    console.error("Error extracting data from Firebase:", error);
    return { 
      addresses: [], averageReviews: [], coordinatesVector: [], facilitiesVector: [],
      foodCategoriesVector: [], foodTypesVector: [], ids: [], images: [], names: [], nrReviewsVector: []
    };
  }
}


 

