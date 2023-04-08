import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        paddingBottom: 25,
    },
    circle: {

        borderRadius: 50,
        borderWidth: 2,
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    offer: {
        textAlign: "center",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 10,
        fontSize: 12,
        color: "grey",
        lineHeight: 20
    },
    input: {
        height: 35,
        width: "70%",
        margin: 4,
        borderWidth: 0.4,
        padding: 5,
        marginRight: "auto",
        marginLeft: "auto",
        borderColor: "lightgrey",
        borderRadius: 3,
        paddingLeft: 8,
        fontSize: 12,


    },
    inputView: {
        paddingTop: 15
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
    pressable_login: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12
    },
    createAccount: {
        textAlign: "center",
        paddingTop: 10,
        fontSize: 12,
    },
    alt_yazilar: {

        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    goLoginScreen: {
        textAlign: "center",
        fontSize: 12,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 10,
        borderColor: "lightgrey"
    },
    startScreen: {
        paddingVertical: 50,
    }
});

export default styles;