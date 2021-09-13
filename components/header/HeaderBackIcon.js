import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


import * as theme from "../../constant/Theme"

const HeaderBackIcon = props => {
    console.log('props: ', props);
    // props.navigation.dispatch(NavigationActions.back())
    return (
        <Pressable onPress={props.goBack}>
            {/* <Text style={styles.button} > back </Text> */}
            <MaterialIcons style={styles.button} name="arrow-back-ios" size={24} color={theme.TextColor} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 20
    }
});

export default HeaderBackIcon;