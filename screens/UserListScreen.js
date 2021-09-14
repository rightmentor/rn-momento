import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserItem from '../components/list/UserItem';
import DefaultText from '../components/ui/DefaultText';

const UserListScreen = props => {

    return (
        <View style={styles.screen}>
            <DefaultText style={styles.info}>Select a contact to start chat</DefaultText>
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    info: {
        fontSize: 10,
        fontWeight: '500',
        marginBottom: 15
    }
});

export default UserListScreen;