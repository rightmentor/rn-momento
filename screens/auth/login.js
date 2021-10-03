import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, globalStyles, rem } from '../../constant';
import PrimaryButton from '../../components/primaryButton';
import SecondaryButton from '../../components/secondaryButton';
import InputBox from '../../components/inputBox';

const Login = props => {
    return (
        <View style={globalStyles.screen}>
            <View style={styles.contentContainer}>
                <Text style={globalStyles.loginInfoText}>Type in your Email ID and Password you chose for Momento and click Go to Feed</Text>
                <InputBox placeholder={'Email ID'} />
                <InputBox placeholder={'Password'} />
            </View>
            <View  style={styles.footerContainer}>
                <PrimaryButton container={styles.goToFeed} pressHandler={() => console.log('press handler pressed')}>Go to Feed</PrimaryButton>
                <SecondaryButton pressHandler={() => props.navigation.navigate('resetPassword')}>Can't Sign In? Reset Password</SecondaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 60,
        paddingHorizontal: rem(32)
    },
    footerContainer: {
        flex: 40,
        paddingHorizontal: rem(32),
        paddingBottom: rem(16),
        alignItems: 'center'
    },
    goToFeed: {
        marginBottom: rem(80)
    }
});

export default Login;