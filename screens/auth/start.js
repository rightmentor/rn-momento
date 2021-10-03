import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors, globalStyles, rem } from '../../constant';
import PrimaryButton from '../../components/primaryButton';
import SecondaryButton from '../../components/secondaryButton';

const Start = props => {
    return (
        <View style={globalStyles.screen}>
            <View style={styles.contentContainer}>
                <Image source={require('../../assets/logo.png')} style={globalStyles.logoImage} />
                <Text style={globalStyles.infoCenterText}>Moment is social app that lets you share your moments with friends</Text>
            </View>
            <View style={styles.footerContainer}>
                <PrimaryButton pressHandler={() => props.navigation.navigate('login')}>Sign In</PrimaryButton>
                <SecondaryButton pressHandler={() => props.navigation.navigate('register')}>Create New Account</SecondaryButton>
                <Text style={globalStyles.copyrightText}>2021 Momento Inc.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: rem(48)
    },
    footerContainer: {
        flex: 40,
        justifyContent: 'space-between',
        paddingHorizontal: rem(32),
        paddingBottom: rem(16),
        alignItems: 'center'
    }
});

export default Start;