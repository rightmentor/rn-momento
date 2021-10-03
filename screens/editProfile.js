import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import { colors, globalStyles, rem } from '../constant';
import PrimaryButton from '../components/primaryButton';
import InputBox from '../components/inputBox';

const EditProfile = props => {
    return (
        <View style={globalStyles.screen}>
            <View style={styles.contentContainer}>
                <Text style={globalStyles.editInfoText}>Hey! We need few details from you before you start sharing on Momento</Text>

                <InputBox placeholder={'Full Name'} />

                <View style={globalStyles.selectBoxContainer}>
                    <Text style={globalStyles.selectBoxText}>Date of Birth</Text>
                    <FontAwesome name="calendar-o" size={20} color={colors.secondary} style={globalStyles.selectBoxIcon} />
                </View>

                <InputBox placeholder={'Gender'} />

                <View style={globalStyles.selectBoxContainer}>
                    <Text style={globalStyles.selectBoxText}>Location</Text>
                    <FontAwesome name="map-marker" size={20} color={colors.secondary} style={globalStyles.selectBoxIcon} />
                </View>

                <InputBox placeholder={'About Me'} />

                <PrimaryButton container={styles.primaryButton} pressHandler={() => console.log('Hello')}>Get Set Go!</PrimaryButton>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: rem(32),
        paddingTop: rem(16)
    },
    primaryButton: {
        marginTop: rem(8)
    }
});

export default EditProfile;