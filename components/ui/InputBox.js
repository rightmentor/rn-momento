import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import * as theme from "../../constant/Theme"

const InputBox = props => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox} placeholder={props.placeholder} value={props.value} onChange={props.valueChange} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
        width: '100%',
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#f1f1f1',
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderRadius: 8,
        fontSize: 12,
        color: theme.TextColor,
        fontWeight: '500'   
    }
});

export default InputBox;