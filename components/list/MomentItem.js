import React from "react";
import { Dimensions, View, Image, StyleSheet, Pressable } from 'react-native';

const win = Dimensions.get('window');


const MomentItem = props => {
    return (
        <Pressable style={styles.container} onPress={props.itemPressHandler}>
            <Image 
                style={styles.image}
                source={require('../../assets/Rectangle3.png')}
            />
        </Pressable>

    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5
    }
})

export default MomentItem;