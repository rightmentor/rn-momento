import React from "react";
import { Pressable, Text , StyleSheet } from "react-native";
import * as theme from "../../constant/Theme"

const NoBgButton = props => {
    console.log(props);
    return (
        <Pressable style={styles.btnContainer} onPress={props.pressHandler}>
            <Text style={[styles.btnText, props.style]}>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
    },
    btnText: {
        color: theme.PrimaryColor,
        fontSize: 14,
        fontWeight: '500'
    }
});

export default NoBgButton;