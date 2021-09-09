import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import FeedScreen from '../screens/feed/FeedScreen';

import HeaderRight from '../components/HeaderRight';

const Drawer = createDrawerNavigator();

const MainNavigator = props => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 18
                    }
                }}
            >
                <Drawer.Screen name="My Feed" component={FeedScreen} options={({router, navigation}) => ({headerRight: porps => <HeaderRight />})}/>
                <Drawer.Screen name="Settings" component={FeedScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator