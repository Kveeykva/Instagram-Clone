import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    input: {
        height: 35,
        width: "70%",
        margin: 4,
        borderWidth: 1,
        padding: 5,
        marginRight: "auto",
        marginLeft: "auto",
        borderColor: "lightgrey",
        borderRadius: 3,
        paddingLeft: 8,
        fontSize: 12,
    },
    input_view: {
    },
    pressable_login: {
        color: "white",
        fontWeight: "bold",
    },
    pressable_view: {
        margin: 12,
        justifyContent: "center",
        width: "70%",
        alignItems: "center",
        backgroundColor: "#B2DFFC",
        padding: 7,
        borderRadius: 3,
        marginRight: "auto",
        marginLeft: "auto",

    },
    forget_password: {
        marginRight: "auto",
        marginLeft: "auto",
        fontSize: 12,
    },
    signup: {
        paddingVertical: 40,
        marginRight: "auto",
        marginLeft: "auto",

    },
    signup_button: {
        fontSize: 14,
        fontWeight: "600",
        color: "#0095F6",
    },
    download: {
        marginRight: "auto",
        marginLeft: "auto",
    },
    icon_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
        marginRight: "auto",
        marginLeft: "auto",

    },
    alt_yazilar: {
        paddingTop: 50,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    launguage: {
        color: '#8e8e8e',
        justifyContent: "center",
        textAlign: "center",
        fontSize: 11,
        paddingTop: 10
    },



});

export default styles;