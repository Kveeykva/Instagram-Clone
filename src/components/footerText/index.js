import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const FooterText = (props) => {
    return (
        <View style={styles.FooterText_Container}>
            <Text style={styles.text}> {props.name} </Text>
        </View>
    );
};
export default FooterText;
