import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { colors, globalStyles } from '../constant';

const DrawerContent = props => {
    
    const iconSize = 18;
    const iconColor = colors.secondary;

    return (
        <DrawerContentScrollView {...props}>
        <View style={globalStyles.drawerHeader}>
            <Image 
                source={require('../assets/profile-pic.png')}
                style={globalStyles.largeCircle}
            />
            <View style={globalStyles.drawerUserInfo}>
                <Text style={globalStyles.drawerUserName}>William Franklin</Text>
                <Text style={globalStyles.drawerUserEmail}>will.frank@email.com</Text>
            </View>
        </View>
        <DrawerItem
            icon={({ size, color }) => (
                <Ionicons name="home-outline" size={iconSize} color={iconColor} />
            )}
            label={"Home"}
            labelStyle={globalStyles.drawerItemLable}
            style={globalStyles.drawerItem}
            onPress={() => { props.navigation.navigate('myfeeds') }}
        />
        <DrawerItem
            icon={({ size, color }) => (
                <Ionicons name="person-outline" size={iconSize} color={iconColor} />
            )}
            label={"My Profile"}
            labelStyle={globalStyles.drawerItemLable}
            style={globalStyles.drawerItem}
            onPress={() => { props.navigation.navigate('myprofile') }}
        />
        <DrawerItem
            icon={({ size, color }) => (
                <Ionicons name="chatbubbles-outline" size={iconSize} color={iconColor} />
            )}
            label={"Chats"}
            labelStyle={globalStyles.drawerItemLable}
            style={globalStyles.drawerItem}
            onPress={() => { props.navigation.navigate('chats') }}
        />
        <DrawerItem
            icon={({ size, color }) => (
                <Ionicons name="arrow-down-circle-outline" size={iconSize} color={iconColor} />
            )}
            label={"Saved by me"}
            labelStyle={globalStyles.drawerItemLable}
            style={globalStyles.drawerItem}
            onPress={() => { props.navigation.navigate('savebyme') }}
        />
        <DrawerItem
            icon={({ size, color }) => (
                <Ionicons name="settings-outline" size={iconSize} color={iconColor} />
            )}
            label={"Settings"}
            labelStyle={globalStyles.drawerItemLable}
            style={globalStyles.drawerItem}
            onPress={() => { props.navigation.navigate('settings')}}
        />
        <DrawerItem
            icon={({ size, color }) => (
                <Ionicons name="ios-log-in-outline" size={iconSize} color={iconColor} />
            )}
            label={"Sign out"}
            labelStyle={globalStyles.drawerItemLable}
            style={globalStyles.drawerItem}
            onPress={() => { }}
        />
    </DrawerContentScrollView>
    );
}

export default DrawerContent;