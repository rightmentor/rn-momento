import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons'; 

import * as theme from "../../constant/Theme"

const HeaderPeopleIcon = props => {
    return (
        <Pressable onPress={props.pressHandler}>
            <SimpleLineIcons name="people" size={22} color={theme.TextColor} style={styles.button} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingRight: 20
    }
});

export default HeaderPeopleIcon;