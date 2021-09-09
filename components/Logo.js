import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = props => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    image: {
        width: 203,
        height: 172
    }
});

export default Logo;