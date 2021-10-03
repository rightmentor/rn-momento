import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, globalStyles, rem } from '../../constant';
import PrimaryButton from '../../components/primaryButton';
import SecondaryButton from '../../components/secondaryButton';
import InputBox from '../../components/inputBox';

const Register = props => {

    const termCondition = <Text style={globalStyles.termCondition}> Terms & Conditions </Text>;

    return (
        <View style={globalStyles.screen}>
            <View style={styles.contentContainer}>
                <Text style={globalStyles.registerInfoText}>Fill in the required details and click Proceed.</Text>
                <Text style={[globalStyles.registerInfoText, styles.requireInfo]}>Fields marked * are mandatory</Text>
                <InputBox placeholder={'Email ID'} />
                <InputBox placeholder={'Password'} />
                <InputBox placeholder={'Confirm Password'} />
                <Text style={globalStyles.registerInfoText}>By Creating Account, you are automatically accepting all the {termCondition} related to Momento</Text>
            </View>
            <View  style={styles.footerContainer}>
                <PrimaryButton container={styles.goToFeed} pressHandler={() => props.navigation.navigate('setUpProfile')}>Proceed</PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 65,
        paddingHorizontal: rem(32),
        paddingTop: rem(16)
    },
    footerContainer: {
        flex: 35,
        paddingHorizontal: rem(32),
        paddingBottom: rem(16),
        alignItems: 'center'
    },
    requireInfo: {
        marginBottom: rem(39)
    }  
});

export default Register;