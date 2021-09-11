import React from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import * as theme from "../constant/Theme"
import FeedUserInfo from "./feed/FeedUserInfo";

const win = Dimensions.get('window');

const Card = props => {
    return (
        <View style={styles.container}>
            <Pressable onPress={props.openFeedDetail}>
                <Image style={styles.image} source={require('../assets/Rectangle2.png')} />
            </Pressable>
            <View style={styles.feedDetailContainer}>
                <FeedUserInfo />
                <MaterialIcons name="favorite" size={25} color="#ff6265" onPress={props.likeFeed} />
                {/* <MaterialIcons name="favorite-outline" size={24} color="black" /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    image: {
        // marginTop: 10,
        width: '90%',
        height: win.height / 4,
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 5
    },
    feedDetailContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 15,
        marginTop: 10,
        alignItems: 'center'
    },
    likeIcon: {

    },
    nameTimeContainer: {
        marginLeft: 10
    }
});

export default Card;