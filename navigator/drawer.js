import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../components/drawerContent';
import { FeedsStack, ProfileStack } from './stack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
    return (
        <Drawer.Navigator
            initialRouteName="myfeeds"
            screenOptions={{ headerShown: false }}
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="myfeeds" component={FeedsStack} />
            <Drawer.Screen name="myprofile" component={ProfileStack} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;