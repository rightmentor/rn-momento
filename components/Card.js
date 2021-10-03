import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { globalStyles } from "../constant";
import IconButton from "./iconButton";

const Card = props => {
    return (
        <View style={globalStyles.cardContainer}>
            <Pressable onPress={props.openFeedDetail}>
                <Image source={require('../assets/Rectangle2.png')} style={globalStyles.cardImage} />
            </Pressable>
            <View style={globalStyles.cardDetails} >
                <View style={globalStyles.cardInfo}>
                    <Image source={require('../assets/Oval.png')} style={globalStyles.mediumCircle} />
                    <View style={globalStyles.feedUser}>
                        <Text style={globalStyles.cardUserName}>Melissa Berry</Text>
                        <Text style={globalStyles.feedTime}>10 mins ago</Text>
                    </View>
                </View>
                <IconButton iconSize={25} iconName="heart-outline" />
            </View>
        </View>
    );
}
export default Card;