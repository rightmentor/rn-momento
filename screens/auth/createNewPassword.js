import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles, rem } from '../../constant';
import PrimaryButton from '../../components/primaryButton';
import InputBox from '../../components/inputBox';

const CreateNewPassword = props => {
    return (
        <View style={globalStyles.screen}>
            <View style={styles.contentContainer}>
                <Text style={globalStyles.loginInfoText}>A strong password has combination of letter and numbers and special characters like $,!,%, etc.</Text>
                <InputBox placeholder={'New Password'} />
                <InputBox placeholder={'Confirm Password'} />
            </View>
            <View  style={styles.footerContainer}>
                <PrimaryButton container={styles.goToFeed} pressHandler={() => console.log('press handler pressed')}>Save</PrimaryButton>
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
    }
});

export default CreateNewPassword;