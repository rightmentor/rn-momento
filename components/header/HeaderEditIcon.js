import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

import * as theme from "../../constant/Theme"

const HeaderEditIcon = props => {
    return (
        <Pressable onPress={props.pressHandler}>
            <FontAwesome5 name="edit" size={22} color={theme.TextColor} style={styles.button}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingRight: 20
    }
});

export default HeaderEditIcon;