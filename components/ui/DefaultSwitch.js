import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

import * as theme from '../../constant/Theme'

const DefaultSwitch = props => {
    const [val , setVal] = useState(true);

    return (
        <Switch
            trackColor={{ false: theme.TextColor, true: theme.PrimaryColor }}
            thumbColor={!val ? theme.TextColor : theme.PrimaryColor}
            onValueChange={setVal.bind(this,!val)}
            value={val}
        />
    )
}

const styles = StyleSheet.create({

});

export default DefaultSwitch;