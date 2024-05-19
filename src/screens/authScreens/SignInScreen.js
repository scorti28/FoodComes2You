import React, { useRef, useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { colors, parameters } from '../../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../headers/Header';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth";
import { SignInContext } from '../../contexts/authContext';

export default function SignInScreen({ navigation }) {
  const [textInput2Focussed, setTextInput2Focussed] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const { dispatchSignedIn } = useContext(SignInContext);
  const [showPassword, setShowPassword] = useState(true);

  async function signIn(data) {
    try {
      const { password, email } = data;
      const user = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } });
      }
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Access account" type="arrow-left-circle" navigation={navigation} />
      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <Text style={styles.title}>Sign In</Text>
      </View>

      <Formik initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          signIn(values);
        }}>
        {(props) => (
          <View>
            <View>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  style={styles.TextInput1}
                  placeholder='Email'
                  ref={textInput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>

              <View style={styles.TextInput2}>
                <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                  <Icon
                    name="lock"
                    style={styles.lockIcon}
                  />
                </Animatable.View>

                <TextInput
                  style={{ flex: 1 }}
                  placeholder='Password'
                  ref={textInput2}
                  onFocus={() => setTextInput2Focussed(false)}
                  onBlur={() => setTextInput2Focussed(true)}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  secureTextEntry={showPassword}
                />

                <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                  <Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    style={styles.visibilityIcon}
                    onPress={() => setShowPassword((prev) => !prev)}
                  />
                </Animatable.View>
              </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Button
                title="SIGN IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={() => props.handleSubmit()}
              />
            </View>
          </View>
        )}
      </Formik>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline", fontSize: 17 }} onPress={() => navigation.navigate("ResetPasswordScreen")}>
          Forgot password? Reset here!
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>OR TRY</Text>
      </View>

      <View style={{ marginTop: 25, marginLeft: 20 }}>
        <Text style={{ ...styles.text1, fontSize: 20 }}>New here? Create account!</Text>
      </View>

      <View style={{ alignItems: "flex-end", marginTop: 10, marginHorizontal: 20 }}>
        <Button
          title="Create a new account!"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => navigation.navigate("SignUpScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.grey3,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: 'center',
    paddingLeft: 15
  },
  lockIcon: {
    color: colors.grey3,
    fontSize: 20
  },
  visibilityIcon: {
    color: colors.grey3,
    fontSize: 20,
    marginRight: 10
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50
  },
  createButton: {
    backgroundColor: "#48dba3",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#48dba3",
    height: 40,
    paddingHorizontal: 10
  },
  createButtonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3
  }
});
