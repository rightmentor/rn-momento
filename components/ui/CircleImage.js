import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CircleImage = props => {
    return (
        <Image 
            source={require('../../assets/Oval.png')}
            style={[styles.image, props.style]}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 35,
        height: 35,
        resizeMode: 'cover',
        borderRadius: 50
    }
});

export default CircleImage;