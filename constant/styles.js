import { StyleSheet } from "react-native";
import { windowWidth, rem } from "./helper";
import colors from "./color";
import fonts from "./fonts";

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white
    },
    logoImage: {
        marginBottom: rem(32)
    },
    loginInfoText: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.s,
        color: colors.secondary,
        marginBottom: rem(63),
        marginTop: rem(81),
        lineHeight: rem(19)
    },
    infoCenterText: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.s,
        color: colors.secondary,
        textAlign: 'center'
    },
    regularText: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.m,
        color: colors.secondary
    },
    primaryButtonContainer: {
        flexDirection: 'row'
    },
    primaryButton: {
        backgroundColor: colors.primary,
        borderRadius: rem(8),
        paddingVertical: rem(16),
        flex: 1,
        alignItems: 'center'
    },
    primaryButtonText: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.m,
        color: colors.white
    },
    secondaryButton: {
    },
    secondaryButtonText: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.m,
        color: colors.primary
    },
    copyrightText: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.xs,
        color: colors.secondary
    },
    inputBoxContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: rem(10),
        marginBottom: rem(32)
    },
    inputBox: {
        flex: 1,
        paddingVertical: rem(13),
        paddingHorizontal: rem(16),
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.s
    },
    registerInfoText: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.s,
        color: colors.secondary,
        lineHeight: rem(19)
    },
    termCondition: {
        fontFamily: fonts.family.medium,
        color: colors.primary,
        fontSize: fonts.size.s,
        textDecorationLine: 'underline'
    },
    editInfoText: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.s,
        color: colors.secondary,
        marginBottom: rem(39),
        lineHeight: rem(19)
    },
    selectBoxContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        borderColor: colors.border,
        borderRadius: rem(10),
        marginBottom: rem(32)
    },
    selectBoxText: {
        flex: 90,
        paddingVertical: rem(13),
        paddingHorizontal: rem(16),
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.s
    },
    selectBoxIcon: {
        flex: 10
    },
    largeCircle: {
        width: rem(56),
        height: rem(56),
        borderRadius: rem(23)
    },
    mediumCircle: {
        width: rem(36),
        height: rem(36),
        borderRadius: rem(18)
    },
    smallCircle: {
        width: rem(24),
        height: rem(24),
        borderRadius: rem(12)
    },
    drawerHeader: {
        flexDirection: 'row',
        paddingVertical: rem(32),
        paddingLeft: rem(16),
        borderBottomColor: colors.border,
        borderBottomWidth: 1
    },
    drawerUserInfo: {
        marginLeft: rem(16),
        justifyContent: 'center'
    },
    drawerUserName: {
        fontSize: fonts.size.l,
        fontFamily: fonts.family.bold,
        color: colors.secondary,
        marginBottom: rem(8)
    },
    drawerUserEmail: {
        fontSize: fonts.size.s,
        fontFamily: fonts.family.medium,
        color: colors.secondary
    },
    drawerItem: {
        height: rem(64),
        justifyContent: 'center'
    },
    drawerItemLable: {
        fontSize: fonts.size.m,
        fontFamily: fonts.family.medium,
        color: colors.secondary,
        marginLeft: -25
    },
    cardContainer: {
        flex: 25,
        paddingHorizontal: rem(16),
        marginBottom: rem(16),
        alignItems: 'center'
    },
    cardImage: {
        height: rem(200),
        aspectRatio: 3.5 / 2,
        flexDirection: 'row'
    },
    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: rem(9),
        alignItems: 'center'
    },
    cardInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    feedUser: {
        marginLeft: rem(8)
    },
    cardUserName: {
        fontFamily: fonts.family.black,
        fontSize: fonts.size.s,
        marginBottom: rem(3)
    },
    feedTime: {
        fontFamily: fonts.family.light,
        fontSize: fonts.size.xs,
        color: colors.time
    },
    feedListContainer: {
        marginTop: rem(16)
    },
    feedUserName: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.s,
        color: colors.secondary,
        marginBottom: rem(3)
    },
    feedInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagUsers: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    tagUser: {
        marginLeft: rem(8)
    },
    feedDetailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: rem(16),
        marginVertical: rem(16)
    },
    feedDetailsBody: {
        paddingHorizontal: rem(16)
    },
    feedDetailsImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    feedContent: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.s,
        color: colors.secondary,
        marginVertical: rem(16)
    },
    feedAdditional: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    feedLoactionIcon: {
        marginRight: rem(10)
    },
    feedCountContainer: {
        flexDirection: 'row',
        marginTop: rem(16),
        borderColor: colors.border,
        borderWidth: 1
    },
    feedCountInner: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: rem(16),
        borderRightColor: colors.border,
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedCount: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.s,
        color: colors.secondary,
        marginLeft: rem(16)
    },
    feedComments: {
        margin: rem(16)
    },
    feedCommentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    feedTotalComments: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.xs,
        color: colors.secondary,
    },
    viewAll: {
        textDecorationLine: 'underline'
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: rem(16)
    },
    commentUserPic: {
        flex: 10
    },
    commentInner: {
        flex: 90,
        marginLeft: rem(8)
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: rem(7)
    },
    commentUser: {
        fontFamily: fonts.family.extraBold,
        fontSize: fonts.size.s,
        color: colors.secondary,
    },
    comment: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.xs,
        color: colors.secondary,
    },
    messageInputContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: rem(16),
        paddingVertical: rem(8),
        borderTopWidth: 1,
        borderTopColor: colors.border
    },
    messageInput: {
        width: windowWidth * .75,
        marginRight: rem(8),
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.xs,
        color: colors.secondary
    },
    sendButton: {
        backgroundColor: colors.primary,
        width: rem(32),
        height: rem(32),
        borderRadius: rem(16),
        alignItems: 'center',
        marginLeft: rem(8),
        justifyContent: 'center'
    },
    modalContainer: {
        paddingHorizontal: rem(16),
        marginTop: rem(64),
        position: 'absolute',
        zIndex: 999,
        width: windowWidth
    },
    modalItem: {
        flexDirection: 'row',
        paddingLeft: rem(16),
        height: rem(48),
        alignItems: 'center',
        backgroundColor: '#EDEDED',
        width: '100%'
    },
    itemText: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.m,
        color: colors.secondary,
        paddingLeft: rem(8)
    },
    profileHeader: {
        flexDirection: 'row',
        paddingVertical: rem(16),
        paddingLeft: rem(16),
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        marginBottom: rem(16),
    },
    profileSection: {
        paddingBottom: rem(22),
        paddingHorizontal: rem(16),
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        marginBottom: rem(16)
    },
    sectionHead: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.xs,
        color: colors.secondary,
        marginBottom: rem(16),
    },
    sectionContent: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.xs,
        color: colors.secondary,
        lineHeight: rem(14)
    },
    stateContainer: {
        flexDirection: 'row',
    },
    state: {
        flex: 1
    },
    momentsState: {
        flex: 2
    },
    followersState: {
        flex: 2
    },
    stateNumber: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.s,
        color: colors.primary,
        marginBottom: rem(3)
    },
    stateInfo: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.xs,
        color: colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: rem(1)
    },
    profileMomentSection: {
        paddingHorizontal: rem(16),
    }
    
});