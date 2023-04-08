import React from "react";
import { View, Image } from "react-native";
import styles from "./styles"
import logo from "../../assets/images/logo.png"

const Logo = (props) => {
    return (
        <View style={styles.image_view}>
            <Image style={[styles.image, props?.style]} source={logo}
            />
        </View>
    );
};
export default Logo;
