import React, {useRef, useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '../../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';


export default function SignInScreen() {

  const[textInput2Focussed, setTextInput2Focussed] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="Create Account" type="arrow-left-circle" />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={styles.title}>Sign In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please introduce your email and password!</Text>
      </View>

      <View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.TextInput1}
            placeholder='Email'
            ref = {textInput1}
          />
        </View>

        <View style={styles.TextInput2}>

          <Animatable.View animation={textInput2Focussed?"":"fadeInLeft"} duration={400}>
            <Icon
              name="lock"
              style={styles.lockIcon}
            />
          </Animatable.View>

          <TextInput
            style = {{width:"85%"}}
            placeholder='Password'
            ref = {textInput2}
            onFocus={() => setTextInput2Focussed(false)}
            onBlur={() => setTextInput2Focussed(true)}
          />

          <Animatable.View animation={textInput2Focussed?"":"fadeInLeft"} duration={400}>
            <Icon
              name="eye-off"
              style={styles.visibilityIcon}
            />
          </Animatable.View>
        </View>

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
    marginRight:10
  },

});
