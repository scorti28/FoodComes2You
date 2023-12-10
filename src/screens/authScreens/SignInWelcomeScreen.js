import React, {useEffect, useContext}from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements';
import { colors, parameters } from '../../global/styles';
import { SignInContext } from '../../contexts/authContext';
import auth from "@react-native-firebase/auth";

export default function SignInWelcomeScreen({navigation}) {

  const {dispatchSignedIn} = useContext(SignInContext);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if(user){
        dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken:"signed-in"}})
      } else { //user is signed out
        dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken:null}})
      }
    })
  },[])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
        <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>Discover New Restaurants</Text>
        <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>In Your Neighborhood</Text>
      </View>

      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={require('../../images/SignInWelcomeScreenSliderP1.jpeg')}
              style={styles.imageStyle}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={require('../../images/SignInWelcomeScreenSliderP2.jpeg')}
              style={styles.imageStyle}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={require('../../images/SignInWelcomeScreenSliderP3.jpeg')}
              style={styles.imageStyle}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4 }}>
        <View style={{ marginHorizontal: 20, marginTop: 60 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate("SignInScreen")}
          />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Button
            title="CREATE ACCOUNT"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate("SignUpScreen")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9dd6eb",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97cae5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92bbd9",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
