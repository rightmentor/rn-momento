import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constant';

const IconButton = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.pressHandler}>
            <Ionicons name={props.iconName} size={props.iconSize} color={colors.secondary} />
        </TouchableOpacity>
    );
}

export default IconButton;