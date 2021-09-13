import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import FeedScreen from '../screens/feed/FeedScreen';
import FeedDetailsScreen from '../screens/feed/FeedDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileSetUpScreen from '../screens/auth/ProfileSetUpScreen';
import SaveByMeScreen from '../screens/SaveByMeScreen';

import HeaderSearchIcon from '../components/header/HeaderSearchIcon';
import HeaderDrawerIcon from '../components/header/HeaderDrawerIcon';
import HeaderBackIcon from '../components/header/HeaderBackIcon';
import HeaderThreeDotIcon from '../components/header/HeaderThreeDotIcon';
import HeaderEditIcon from '../components/header/HeaderEditIcon';
import DrawerContent from '../components/DrawerContent';

const Stack = createNativeStackNavigator();

const ProfileNavigator = props => {

    const editProfileHandler = () => {
        props.navigation.navigate('editProfile');
    }

    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false}}>
            <Stack.Screen name="userProfile" component={ProfileScreen} options={({route, navigation}) => ({headerTitle: 'You',headerRight: porps => <HeaderEditIcon pressHandler={editProfileHandler} />, headerLeft: props => <HeaderDrawerIcon {...navigation}/>})}></Stack.Screen>
            <Stack.Screen name="editProfile" component={ProfileSetUpScreen} options={({route, navigation}) => ({headerTitle: 'Edit Profile', headerLeft: props => <HeaderBackIcon {...navigation}/>})}></Stack.Screen>
        </Stack.Navigator>
    )
}

const FeedNavigator = props => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false}}>
            <Stack.Screen name="feed" component={FeedScreen} options={({router, navigation}) => ({headerTitle: 'My Feed',headerRight: porps => <HeaderSearchIcon />, headerLeft: props => <HeaderDrawerIcon {...navigation}/>})}></Stack.Screen>
            <Stack.Screen name="feedDetails" component={FeedDetailsScreen} options={({route, navigation}) => ({headerTitle: route.params.name+'\'s Moments', headerRight: porps => <HeaderThreeDotIcon />, headerLeft: props => <HeaderBackIcon {...navigation} />})} ></Stack.Screen>
        </Stack.Navigator>
    )
}
 
const Drawer = createDrawerNavigator();

const MainNavigator = props => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <DrawerContent {...props} />}
                initialRouteName="profile"
                screenOptions={{
                    // headerTitleAlign: 'center',
                    // headerTitleStyle: {
                    //     fontSize: 18
                    // },
                    // headerStyle: {
                    //     elevation: 0,
                    //     borderWidth: 0
                    // },
                    // headerTitleContainerStyle: {
                    //     elevation: 0,
                    //     borderWidth: 0
                    // }
                    headerShown: false
                }}
            >
                <Drawer.Screen name="myfeed" component={FeedNavigator} />
                <Drawer.Screen name="profile" component={ProfileNavigator} />
                <Drawer.Screen name="savebyme" component={SaveByMeScreen} options={({route, navigation}) => ({headerShown:true, headerTitleAlign: 'center', headerTitle: 'Save by me', headerStyle: {elevation: 0, borderWidth: 0}, headerLeft: props => <HeaderDrawerIcon {...navigation}/>})} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator