import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { globalStyles } from "../constant";

const Comment = props => {
    return (
        <View style={globalStyles.commentContainer}>
            <View style={globalStyles.commentUserPic}>
                <Image source={require('../assets/Oval.png')} style={globalStyles.smallCircle} />
            </View>
            <View style={globalStyles.commentInner}>
                <View style={globalStyles.commentHeader}>
                    <Text style={globalStyles.commentUser}>Anthony Newman</Text>
                    <Text style={globalStyles.feedTime}>3 mins ago</Text>
                </View>
                <Text style={globalStyles.comment}>It was a humorously perilous business for both of us. For, before we proceed further</Text>
            </View>
        </View>
    );
}
export default Comment;