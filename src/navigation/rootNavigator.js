import React, {useContext} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import AuthFunction from './authNavigators';
import { SignInContext } from '../contexts/authContext';
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