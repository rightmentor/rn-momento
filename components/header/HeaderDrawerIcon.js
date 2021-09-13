import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import * as theme from "../../constant/Theme"

const HeaderDrawerIcon = props => {
    return (
        <TouchableOpacity onPress={props.openDrawer}>
            <MaterialIcons style={styles.button} name="menu" size={30} color={theme.TextColor} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 15
    }
});

export default HeaderDrawerIcon;