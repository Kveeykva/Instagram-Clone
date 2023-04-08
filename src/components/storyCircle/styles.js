import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userImage: {
        height: 66,
        width: 66,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 2,
    },
    userName: {
        textAlign: "center",
        fontSize: 10,
        textTransform: "lowercase",


    },
    addBtnContainer: {
        marginTop: 55,
        backgroundColor: '#4c68d7',
        marginLeft: 45,
        width: 17,
        height: 17,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "white",
        justifyContent: "center"
    },
    addBtn: {
        color: "white",
        textAlign: "center",
        fontSize: 12,
        textAlignVertical: "center"

    },
    yourStory: {
        textAlign: "center",
        fontSize: 10,
        textTransform: "lowercase",
    }






});

export default styles;