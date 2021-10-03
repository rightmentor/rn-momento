import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, fonts } from '../constant';
import Start from '../screens/auth/start';
import Login from '../screens/auth/login';
import ResetPassword from '../screens/auth/resetPassword';
import CreateNewPassword from '../screens/auth/createNewPassword';
import Register from '../screens/auth/register';
import EditProfile from '../screens/editProfile';

const Stack = createNativeStackNavigator();

const AuthNavigator = props => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontSize: fonts.size.l,
                    fontFamily: fonts.family.medium,
                    color: colors.secondary
                },
            }}
        >
            <Stack.Screen name="start" component={Start} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="login" component={Login} options={{ title: 'Sign In' }}></Stack.Screen>
            <Stack.Screen name="resetPassword" component={ResetPassword} options={{ title: 'Reset Password' }}></Stack.Screen>
            <Stack.Screen name="newPassword" component={CreateNewPassword} options={{ title: 'Create New Password' }}></Stack.Screen>
            <Stack.Screen name="register" component={Register} options={{ title: 'Create Account' }}></Stack.Screen>
            <Stack.Screen name="setUpProfile" component={EditProfile} options={{ title: 'Set Up Profile' }}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AuthNavigator;