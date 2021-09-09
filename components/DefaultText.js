import React from "react";
import { Text, StyleSheet } from "react-native";
import * as theme from "../constant/Theme"

const DefaultText = props => {
    return (
        <Text style={[styles.defaultText, props.style]} >{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    defaultText: {
        color: theme.TextColor,
        // textAlign: 'center',
        // fontSize: 12
    }
});

export default DefaultText;