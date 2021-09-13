import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import * as theme from "../../constant/Theme"

const IconInputBox = props => {
    return (
        <View style={styles.container}>
            <View style={styles.inputBoxcontainer}>
                <TextInput style={styles.inputBox} placeholder={props.placeholder} value={props.value} onChange={props.valueChange} />
                <FontAwesome5 name={props.iconName} size={20} color={theme.TextColor} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
        width: '100%',
    },
    inputBoxcontainer: {
        borderWidth: 1,
        borderColor: '#f1f1f1',
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderRadius: 8,
        flexDirection: 'row'
    },
    inputBox: {
        fontSize: 12,
        color: theme.TextColor,
        fontWeight: '500',
        width: '95%',
        outlineWidth: 0
    }
});

export default IconInputBox;