import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import * as theme from "../../constant/Theme"

const HeaderDrawerIcon = props => {
    return (
        <Pressable onPress={props.openDrawer}>
            <MaterialIcons style={styles.button} name="menu" size={30} color={theme.TextColor} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 10
    }
});

export default HeaderDrawerIcon;