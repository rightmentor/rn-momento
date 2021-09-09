import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DefaultText from '../../components/DefaultText';
import DefaultButton from '../../components/DefaultButton';
import NoBgButton from '../../components/NoBgButton';
import InputBox from '../../components/InputBox';

const CreateAccountScreen = props => {
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [confirmPasswordInput, setconfirmPasswordInput] = useState();

    const proceedHandler = () => {
        console.log('Go to feed');
        props.navigation.navigate('profileSetUp');
    }

    const confirmPasswordInputHanlder = () => {
        console.log('Confirm Password ==> ', input.target.value);
    }

    const resetPasswordHandler = () => {
        props.navigation.navigate('resetPassword');
    }

    const emailInputHandler = input => {
        console.log('email ==> ', input.target.value);
    }

    const passwordInputHandler = input => {
        console.log('Password ==> ', input.target.value);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <DefaultText>Fill in the required details and click Proceed.</DefaultText>
                <DefaultText>Field marked * are mandatory</DefaultText>
            </View>
            <View style={styles.inputBoxContainer}>
                <InputBox placeholder="Email ID" value={emailInput} valueChange={emailInputHandler} />
                <InputBox placeholder="Password" value={passwordInput} valueChange={passwordInputHandler} />
                <InputBox placeholder="Confirm Password" value={confirmPasswordInput} valueChange={confirmPasswordInputHanlder} />
            </View>
            <View style={styles.infoContainer}>
                <DefaultText style={styles.termConditions}>By Creating Account, you are automatically accepting all the&nbsp;
                    <NoBgButton title="Term & Conditions" style={styles.termConditionsLink} pressHandler={resetPasswordHandler} />
                    , related to Momento
                </DefaultText>
            </View>
            <View style={styles.footerContainer}>
                <DefaultButton title="Proceed" pressHandler={proceedHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 80,
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    headerContainer: {
        width: '100%',
        flexGrow: 0.7
    }, 
    inputBoxContainer: {
        width: '100%',
        flexGrow: 2.3,
        justifyContent: 'space-around'
    },
    infoContainer: {
        width: '100%',
        flexGrow: 1,
        justifyContent: 'center'
    },
    footerContainer: {
        width: '100%',
        flexGrow: 1,
        justifyContent: 'center'
    },
    termConditions: {
        fontSize: 12
    },
    termConditionsLink: {
        textDecorationLine: 'underline',
        fontSize: 12,
        paddingLeft: 2
    }
});

export default CreateAccountScreen;