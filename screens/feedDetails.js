import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors, globalStyles } from '../constant';
import IconButton from '../components/iconButton';
import SecondaryButton from '../components/secondaryButton';
import Comment from '../components/comment';
import MessageInput from '../components/messageInput'
import FeedDetailModal from '../components/modal/feedDetailModal';

const FeedDetails = props => {
    const [showModal, setShowModal] = useState(false)

    const openModel = () => {
        console.log(showModal)
        setShowModal(!showModal);
    }
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.userName + '’s Moment',
            headerRight: () => (
                <IconButton
                    pressHandler={openModel}
                    iconName="ellipsis-horizontal-sharp"
                    iconSize={25}
                />
            )
        });
    }, [props.navigation]);
    return (
        <ScrollView style={globalStyles.screen}>
            <FeedDetailModal isVisible={showModal} modalClose={setShowModal.bind(this, !showModal)} />
            <View style={globalStyles.feedDetailsHeader}>

                <View style={globalStyles.feedInfo}>
                    <Image source={require('../assets/Oval.png')} style={globalStyles.mediumCircle} />

                    <View style={globalStyles.feedUser}>
                        <Text style={globalStyles.feedUserName}>Melissa Berry</Text>
                        <Text style={globalStyles.feedTime}>10 mins ago</Text>
                    </View>
                </View>

                <View style={globalStyles.tagUsers}>
                    <Image source={require('../assets/Oval.png')} style={[globalStyles.smallCircle, globalStyles.tagUser]} />
                    <Image source={require('../assets/Oval.png')} style={[globalStyles.smallCircle, globalStyles.tagUser]} />
                    <Image source={require('../assets/Oval.png')} style={[globalStyles.smallCircle, globalStyles.tagUser]} />
                    <Image source={require('../assets/Oval.png')} style={[globalStyles.smallCircle, globalStyles.tagUser]} />
                </View>
            </View>

            <View style={globalStyles.feedDetailsBody}>
                <Image source={require('../assets/Rectangle3.png')} style={globalStyles.feedDetailsImage} />
                <Text style={globalStyles.feedContent}>It was a humorously perilous business for both of us. For, before we proceed further</Text>

                <View style={globalStyles.feedAdditional} >
                    <Ionicons name="ios-location-outline" size={16} color={colors.secondary} style={globalStyles.feedLoactionIcon} />
                    <Text style={globalStyles.feedTime}>10 mins ago</Text>
                </View>
            </View>

            <View style={globalStyles.feedCountContainer}>
                <View style={globalStyles.feedCountInner}>
                    <IconButton iconSize={20} iconName="heart-outline" />
                    <Text style={globalStyles.feedCount}>214</Text>
                </View>
                <View style={globalStyles.feedCountInner}>
                    <IconButton iconSize={20} iconName="share-social-outline" />
                    <Text style={globalStyles.feedCount}>3</Text>
                </View>
            </View>

            <View style={globalStyles.feedComments}>
                <View style={globalStyles.feedCommentHeader}>
                    <Text style={globalStyles.feedTotalComments}>21 Comments</Text>
                    <SecondaryButton textStyle={globalStyles.viewAll}>View All</SecondaryButton>
                </View>
                <Comment />
                <Comment />
            </View>

            <MessageInput />
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});

export default FeedDetails;