import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DefaultText from '../../components/DefaultText';
import DefaultButton from '../../components/DefaultButton';
import InputBox from '../../components/InputBox';
import IconInputBox from '../../components/IconInputBox';

const ProfileSetUpScreen = props => {
    const [fullNameInput, setFullNameInput] = useState();
    const [DOBInput, setDOBInput] = useState();
    const [genderInput, setGenderInput] = useState();
    const [locationInput, setLocationInput] = useState();
    const [aboutMeInput, setAboutMeInput] = useState();

    const GoToFeedHandler = () => {
        console.log('Go to feed');
        // props.navigation.navigate('resetPassword');
    }

    const fullNameInputHanlder = input => {
        console.log('Confirm Password ==> ', input.target.value);
    }

    const DOBInputHandler = input => {
        console.log('Confirm Password ==> ', input.target.value);
    }

    const genderInputHandler = input => {
        console.log('Confirm Password ==> ', input.target.value);
    }

    const locationInputHandler = input => {
        console.log('Confirm Password ==> ', input.target.value);
    }

    const aboutMeInputHandler = input => {
        console.log('Confirm Password ==> ', input.target.value);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <DefaultText>Type in your Email ID and Password you choose for Momento and click Go to Feed</DefaultText>
            </View>
            <View style={styles.inputBoxContainer}>
                <InputBox placeholder="Full Name" value={fullNameInput} valueChange={fullNameInputHanlder} />
                <IconInputBox placeholder="Date of Birth" value={DOBInput} iconName="calendar-alt" valueChange={DOBInputHandler} />
                <InputBox placeholder="Gender" value={genderInput} valueChange={genderInputHandler} />
                <IconInputBox placeholder="Location" value={locationInput} iconName="map-marker-alt" valueChange={locationInputHandler} />
                <InputBox placeholder="About me" value={aboutMeInput} valueChange={aboutMeInputHandler} />
            </View>
            <View style={styles.footerContainer}>
                <DefaultButton title="Get Set Go!" pressHandler={GoToFeedHandler} />
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
        paddingBottom: 40,
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    headerContainer: {
        width: '100%',
        flexGrow: 0.7
    },
    inputBoxContainer: {
        width: '100%',
        flexGrow: 2.6,
        justifyContent: 'space-between'
    },
    footerContainer: {
        width: '100%',
        flexGrow: 0.7,
        justifyContent: 'flex-end'
    }
});

export default ProfileSetUpScreen;