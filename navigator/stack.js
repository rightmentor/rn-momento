import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, fonts } from '../constant';

import Feeds from '../screens/feeds';
import FeedDetails from '../screens/feedDetails';

import IconButton from '../components/iconButton';
import Profile from '../screens/profile';
import EditProfile from '../screens/editProfile';

const Stack = createNativeStackNavigator();
const screenOptions = {
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        fontSize: fonts.size.l,
        fontFamily: fonts.family.medium,
        color: colors.secondary
    },
}

const openDrawer = props => {
    props.openDrawer();
}

export const FeedsStack = props => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="feeds"
                component={Feeds}
                options={
                    ({ route, navigation }) => ({
                        title: 'My Feeds',
                        headerLeft: props =>
                            <IconButton
                                pressHandler={openDrawer.bind(this, navigation)}
                                iconName="menu-outline"
                                iconSize={25}
                            />
                    })
                }></Stack.Screen>
            <Stack.Screen
                name="feedDetails"
                component={FeedDetails}
                ></Stack.Screen>
        </Stack.Navigator>
    );
}

export const ProfileStack = props => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="profile"
                component={Profile}
                options={
                    ({ route, navigation }) => ({
                        title: 'You',
                        headerLeft: props =>
                            <IconButton
                                pressHandler={openDrawer.bind(this, navigation)}
                                iconName="menu-outline"
                                iconSize={25}
                            />
                    })
                }></Stack.Screen>
            <Stack.Screen
                name="editProfile"
                component={EditProfile}
                options={{title: 'Edit Profile'}}
                ></Stack.Screen>
        </Stack.Navigator>
    );
}