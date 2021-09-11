import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import * as theme from "../../constant/Theme"

const DefaultButton = props => {
    console.log(props);
    return (
        <Pressable style={styles.btnContainer} onPress={props.pressHandler}>
            <Text style={styles.btnText}>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: theme.PrimaryColor,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15
    },
    btnText: {
        color: theme.WhiteColor,
        fontSize: 14
    }
});

export default DefaultButton;