import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthFunction from './authNavigators';
import AppFunction from './appStack';
import { SignInContext } from '../contexts/authContext';

export default function RootNavigator(){
    const {signedIn} = useContext(SignInContext);
    return(
        <NavigationContainer>
            {
                signedIn.userToken !== 'signed-in' ? ( //user is logged out => don't have access to the app
                    <AuthFunction />
                ) : (
                    <AppFunction />
                )
            }
        </NavigationContainer>
    )
}