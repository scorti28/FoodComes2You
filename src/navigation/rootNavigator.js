import React, {useContext} from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import AuthFunction from './authNavigators';
import AppFunction from './appStack';
import { SignInContext } from '../contexts/authContext';
import { setNavigator } from './NavigationService';
import DrawerNavigator from './DrawerNavigator';

export default function RootNavigator(){
    const {signedIn} = useContext(SignInContext);
    return(
        <NavigationContainer>
            {
                signedIn.userToken !== 'signed-in' ? ( //user is logged out => don't have access to the app
                    <AuthFunction />
                ) : (
                    <DrawerNavigator />
                )
            }
        </NavigationContainer>
    )
}