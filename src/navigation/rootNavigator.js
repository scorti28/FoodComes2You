import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthFunction from './authNavigators';

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthFunction />
        </NavigationContainer>
    )
}