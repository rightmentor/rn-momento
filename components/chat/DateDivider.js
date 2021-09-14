import React from "react";
import { View, StyleSheet } from "react-native";

import * as theme from '../../constant/Theme';
import DefaultText from "../ui/DefaultText";

const DateDivider = props => {
    return (
        <View style={styles.container}>
                <DefaultText style={styles.message}>14 Sept, 2021 </DefaultText>
                <View style={styles.divider} ></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    },
    message: {
        fontSize: 10,
        fontWeight: '500'
    },
    divider: {
        flex: 1,
        height: 1,
        marginLeft: 20,
        backgroundColor: theme.BorderColor
    }
});

export default DateDivider;