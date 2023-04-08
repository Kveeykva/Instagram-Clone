import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const Box = (props) => {
  return (
    <View style={[styles.container, props?.style]}>
      <FontAwesome5 style={styles.icon} name={props.icon} size={24} />
      <Text style={styles.text}> {props.text} </Text>
    </View>
  );
};
export default Box;
