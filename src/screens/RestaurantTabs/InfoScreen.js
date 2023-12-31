import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {useState, useEffect} from 'react';

import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function InfoScreen({id}) {
    //const [inputText, setInputText] = useState('');
    //const [qrvalue, setQrvalue] = useState('');
    //const {id, restaurant} = routes.params;
    

    // useEffect(() => {
    //     setQrvalue(id)
    //   }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              ID of current page is: {id}
            </Text>
            <QRCode
              //QR code value
              value = {`${id}`}
              //size of QR Code
              size = {250}
            />
          </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
      },
      titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      textStyle: {
        textAlign: 'center',
        margin: 10,
      },
      textInputStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
      },
      buttonStyle: {
        backgroundColor: '#51D8C7',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#51D8C7',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
        padding: 10,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
    });