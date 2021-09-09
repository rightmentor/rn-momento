import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import * as theme from "../constant/Theme"

const HeaderRight = props => {
    return (
        <Pressable onPress={props.goBack}>
            {/* <Text style={styles.button} > back </Text> */}
            <MaterialIcons style={styles.button} name="search" size={30} color={theme.TextColor} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingRight: 10
    }
});

export default HeaderRight;