import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../constant';

const SecondaryButton = props => {
    return (
      <TouchableOpacity style={[globalStyles.secondaryButton, props.buttonContainer]} onPress={props.pressHandler}>
          <Text style={[globalStyles.secondaryButtonText, props.textStyle]}>{props.children}</Text>
      </TouchableOpacity>  
    );
}

export default SecondaryButton;