import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

import * as theme from "../../constant/Theme"

const HeaderThreeDotIcon = props => {
    return (
        <Pressable onPress={props.goBack}>
            <Entypo name="dots-three-horizontal" style={styles.button} size={20} color={theme.TextColor} />
            {/* <MaterialIcons style={styles.button} name="search" size={30} color={theme.TextColor} /> */}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingRight: 20
    }
});

export default HeaderThreeDotIcon;