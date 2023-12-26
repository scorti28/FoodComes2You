import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import auth from "@react-native-firebase/auth";
import { colors, parameters } from '../../global/styles';
import Header from '../../components/Header';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  async function handleResetPassword() {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password Reset Email Sent', 'Check your email to reset your password.');
      navigation.goBack(); 
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Change Password" type="arrow-left-circle" navigation={navigation}/>
      <View style={styles.content}>
        <Text style={styles.title}>Reset Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Button
          title="Reset Password"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          onPress={handleResetPassword}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 80, // Adjust the marginTop to create space for the header
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.grey3,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#86939e',
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    width: '100%',
    height: 48,
  },
  buttonStyle: {
    backgroundColor: parameters.styledButton.backgroundColor,
    borderRadius: parameters.styledButton.borderRadius,
    height: parameters.styledButton.height,
    paddingHorizontal: 20, // Adjust the padding to your preference
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
