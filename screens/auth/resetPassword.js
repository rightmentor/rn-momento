import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles, rem } from '../../constant';
import PrimaryButton from '../../components/primaryButton';
import InputBox from '../../components/inputBox';

const ResetPassword = props => {
    return (
        <View style={globalStyles.screen}>
            <View style={styles.contentContainer}>
                <Text style={globalStyles.loginInfoText}>No Problem! Just give in your Email ID and we will send you a link to reset your password</Text>
                <InputBox placeholder={'Email ID'} />
                <PrimaryButton container={styles.sendLink} pressHandler={() => props.navigation.navigate('newPassword')}>Send Link</PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: rem(32)
    },
    sendLink: {
        marginTop: rem(8)
    }
});

export default ResetPassword;