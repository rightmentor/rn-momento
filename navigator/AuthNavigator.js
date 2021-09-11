import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import CreateAccountScreen from '../screens/auth/CreateAccountScreen';
import ProfileSetUpScreen from '../screens/auth/ProfileSetUpScreen';

import HeaderBackIcon from '../components/header/HeaderBackIcon';

const Stack = createNativeStackNavigator();

const AuthNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} ></Stack.Screen>
                <Stack.Screen
                    name="profileSetUp"
                    component={ProfileSetUpScreen}
                    options={({ route, navigation }) => ({ title: 'Set up Profile', headerTitleAlign: 'center', headerLeft: props => <HeaderBackIcon {...navigation} /> })} ></Stack.Screen>
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={({ route, navigation }) => ({ title: 'Sign In', headerTitleAlign: 'center', headerLeft: props => <HeaderBackIcon {...navigation} /> })} ></Stack.Screen>
                <Stack.Screen
                    name="resetPassword"
                    component={ResetPasswordScreen}
                    options={({ route, navigation }) => ({ title: 'Reset Password', headerTitleAlign: 'center', headerLeft: props => <HeaderBackIcon {...navigation} /> })} ></Stack.Screen>
                <Stack.Screen
                    name="createAccount"
                    component={CreateAccountScreen}
                    options={({ route, navigation }) => ({ title: 'Create Account', headerTitleAlign: 'center', headerLeft: props => <HeaderBackIcon {...navigation} /> })} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;