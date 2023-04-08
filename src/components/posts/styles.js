import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get("window");

const styles = StyleSheet.create({

    allIn: {
        borderColor: "grey",
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: "white"

    },
    main: {
        padding: 4.8,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white"



    },
    userImage: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 2,
    },
    userName: {
        textAlign: "center",
        fontSize: 14,
        textTransform: "lowercase",
        paddingTop: 10,
        paddingLeft: 10,
        fontWeight: "500",

    },

    postImage: {
        width: "100%",
        height: 350,
        alignSelf: "center",

    },
    likeView: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",

    },
    likeIcon: {

        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // iOS
        shadowOffset: {
            width: 0,            // These can't both be 0
            height: 1,           // i.e. the shadow has to be offset in some way
        },
        // Android
        shadowOffset: {
            width: 0,            // Same rules apply from above
            height: 1,           // Can't both be 0
        },

    }

});

export default styles;