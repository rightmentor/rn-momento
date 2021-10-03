import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { colors, globalStyles } from "../../constant";

const FeedDetailModal = props => {

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
                props.modalClose();
            }}
        >
            <Pressable onPress={props.modalClose} style={{flex: 1}}>
                <View style={globalStyles.modalContainer}>
                    <Pressable style={globalStyles.modalItem}>
                        <Ionicons name="arrow-redo-outline" size={16} color={colors.secondary} />
                        <Text style={globalStyles.itemText} >Share external</Text>
                    </Pressable>
                    <Pressable style={globalStyles.modalItem}>
                        <Ionicons name="arrow-down-circle-outline" size={16} color={colors.secondary} />
                        <Text style={globalStyles.itemText} >Save moment</Text>
                    </Pressable>
                    <Pressable style={globalStyles.modalItem}>
                        <SimpleLineIcons name="user-unfollow" size={16} color={colors.secondary} />
                        <Text style={globalStyles.itemText} >Hide posts by Melissa</Text>
                    </Pressable>
                    <Pressable style={globalStyles.modalItem}>
                        <AntDesign name="exclamationcircleo" size={16} color={colors.secondary} />
                        <Text style={globalStyles.itemText} >Report</Text>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    );
}
export default FeedDetailModal;