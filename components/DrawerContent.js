import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

import * as theme from '../constant/Theme';
import FeedUserInfo from "../components/feed/FeedUserInfo";

const DrawerContent = props => {
    console.log(props);
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.profileContainer}>
                <FeedUserInfo
                    avtarStyle={styles.profileImage}
                    nameStyle={styles.name}
                    infoStyle={styles.info}
                    nameContainerStyle={styles.nameContainer}
                />
            </View>
            <DrawerItem
                icon={({ size, color }) => (
                    <Ionicons name="home-outline" size={24} color="black" />
                )}
                label={"Home"}
                labelStyle={styles.itemLabel}
                style={styles.drawerItem}
                onPress={() => { props.navigation.navigate('myfeed') }}
            />
            <DrawerItem
                icon={({ size, color }) => (
                    <Ionicons name="person-outline" size={24} color="black" />
                )}
                label={"My Profile"}
                labelStyle={styles.itemLabel}
                style={styles.drawerItem}
                onPress={() => { props.navigation.navigate('profile') }}
            />
            <DrawerItem
                icon={({ size, color }) => (
                    <Ionicons name="chatbubbles-outline" size={24} color="black" />
                )}
                label={"Chats"}
                labelStyle={styles.itemLabel}
                style={styles.drawerItem}
                onPress={() => { }}
            />
            <DrawerItem
                icon={({ size, color }) => (
                    <Ionicons name="arrow-down-circle-outline" size={24} color="black" />
                )}
                label={"Saved by me"}
                labelStyle={styles.itemLabel}
                style={styles.drawerItem}
                onPress={() => { }}
            />
            <DrawerItem
                icon={({ size, color }) => (
                    <Ionicons name="settings-outline" size={24} color="black" />
                )}
                label={"Settings"}
                labelStyle={styles.itemLabel}
                style={styles.drawerItem}
                onPress={() => { props.navigation.navigate('Settings')}}
            />
            <DrawerItem
                icon={({ size, color }) => (
                    <Ionicons name="ios-log-in-outline" size={24} color="black" />
                )}
                label={"Sign out"}
                labelStyle={styles.itemLabel}
                style={styles.drawerItem}
                onPress={() => { }}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingLeft: 20,
        paddingVertical: 30,
        borderBottomColor: theme.BorderColor,
        borderBottomWidth: 1
    },
    profileImage: {
        width: 56,
        height: 56,
    },
    nameContainer: {
        justifyContent: 'space-around',
        paddingVertical: 5,
        marginLeft: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 12,
        fontWeight: '500',
        color: theme.LightTextColor
    },
    itemLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: theme.TextColor,
        marginLeft: -25
    },
    drawerItem: {
        paddingVertical: 5 
    }
});

export default DrawerContent;