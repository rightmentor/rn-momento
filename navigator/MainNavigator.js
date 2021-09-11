import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import FeedScreen from '../screens/feed/FeedScreen';
import FeedDetailsScreen from '../screens/feed/FeedDetailsScreen';
import HeaderSearchIcon from '../components/header/HeaderSearchIcon';
import HeaderDrawerIcon from '../components/header/HeaderDrawerIcon';
import HeaderBackIcon from '../components/header/HeaderBackIcon';

const Stack = createNativeStackNavigator();

const FeedNavigator = props => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false}}>
            <Stack.Screen name="feed" component={FeedScreen} options={({router, navigation}) => ({headerTitle: 'My Feed',headerRight: porps => <HeaderSearchIcon />, headerLeft: props => <HeaderDrawerIcon {...navigation}/>})}></Stack.Screen>
            <Stack.Screen name="feedDetails" component={FeedDetailsScreen} options={({route, navigation}) => ({headerTitle: route.params.name, headerRight: porps => <HeaderSearchIcon />, headerLeft: props => <HeaderBackIcon {...navigation} />})} ></Stack.Screen>
        </Stack.Navigator>
    )
}
 
const Drawer = createDrawerNavigator();

const MainNavigator = props => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="My Feed"
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
                <Drawer.Screen name="My Feed" component={FeedNavigator} />
                <Drawer.Screen name="Settings" component={FeedScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator