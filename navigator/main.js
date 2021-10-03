import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth';
import DrawerNavigator from './drawer';

const MainNavigator = props => {
    return (
        <NavigationContainer>
            {/* <AuthNavigator></AuthNavigator> */}
            <DrawerNavigator></DrawerNavigator>
        </NavigationContainer>
    );
}

export default MainNavigator;