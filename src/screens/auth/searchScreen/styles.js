import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        height: 50,
        flexDirection: 'row',


    },
    searchInput: {
        backgroundColor: "#EFEFEF",
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 15,

    },
    bottomTabBar: {

        backgroundColor: "white",
        justifyContent: "flex-end",
    },
    postImageView: {

        width: width / 3,
        height: 136.65,
        borderWidth: 1,
        borderColor: "white"
    }

})

export default styles;