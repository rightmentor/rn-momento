import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

import { colors, globalStyles, rem } from '../constant';
import IconButton from '../components/iconButton';

const Profile = props => {

    const list = [
        { id: '1', name: 'test' },
        { id: '2', name: 'test' },
        { id: '3', name: 'test' },
        { id: '4', name: 'test' },
        { id: '5', name: 'test' },
        { id: '6', name: 'test' },
        { id: '7', name: 'test' },
        { id: '8', name: 'test' },
        { id: '9', name: 'test' },
        { id: '10', name: 'test' },
        { id: '11', name: 'test' },
        { id: '12', name: 'test' },
        { id: '13', name: 'test' },
        { id: '14', name: 'test' },
        { id: '15', name: 'test' },
        { id: '16', name: 'test' },
        { id: '17', name: 'test' },
        { id: '18', name: 'test' },
        { id: '19', name: 'test' },
        { id: '20', name: 'test' },
        { id: '21', name: 'test' },
        { id: '22', name: 'test' },
        { id: '23', name: 'test' },
    ];

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <IconButton
                    pressHandler={() => props.navigation.navigate('editProfile')}
                    iconName="create-outline"
                    iconSize={25}
                />
            )
        });
    }, [props.navigation]);

    return (
        <View style={globalStyles.screen}>
            <View style={globalStyles.profileHeader}>
                <Image
                    source={require('../assets/profile-pic.png')}
                    style={globalStyles.largeCircle}
                />
                <View style={globalStyles.drawerUserInfo}>
                    <Text style={globalStyles.drawerUserName}>William Franklin</Text>
                    <Text style={globalStyles.drawerUserEmail}>M, 27, Atlanta, GA</Text>
                </View>
            </View>

            <View style={globalStyles.profileSection}>
                <Text style={globalStyles.sectionHead}>About</Text>
                <Text style={globalStyles.sectionContent}>So strongly and metaphysically did I conceive of my situation then, that while ear.ut</Text>
            </View>

            <View style={globalStyles.profileSection}>
                <Text style={globalStyles.sectionHead}>Stats</Text>
                <View style={globalStyles.stateContainer}>
                    <View style={globalStyles.momentsState}>
                        <Text style={globalStyles.stateNumber}>8</Text>
                        <Text style={globalStyles.stateInfo}>Moments</Text>
                    </View>
                    <View style={globalStyles.followersState}>
                        <Text style={globalStyles.stateNumber}>16</Text>
                        <Text style={globalStyles.stateInfo}>Followers</Text>
                    </View>
                    <View style={globalStyles.state}>
                        <Text style={globalStyles.stateNumber}>34</Text>
                        <Text style={globalStyles.stateInfo}>Following</Text>
                    </View>
                </View>
            </View>

            <View style={globalStyles.profileMomentSection}>
                <Text style={globalStyles.sectionHead}>Moments</Text>
                {/* <View style={{flex: 1, width: '100%'}}> */}
                    <FlatList
                        data={list}
                        numColumns={3}
                        // columnWrapperStyle={{ justifyContent: 'space-between' }}
                        keyExtractor={item => item.id}
                        renderItem={item => <Image source={require('../assets/Rectangle2.png')} style={{ width: '20%', aspectRatio: 1 }} />}
                    />
                {/* </View> */}
            </View>

        </View>
    );
}

export default Profile;