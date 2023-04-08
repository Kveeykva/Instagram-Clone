import React, { useState } from "react";
import {
  Pressable,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import userList from "../../utilts/userList.json";

const Modalx = ({ route }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [imageIndex, setImageIndex] = useState(0);
  const [currentUser, setCurentUser] = useState(route.params.user);

  const moveForward = () => {
    const currentIndex = userList.findIndex((x) => x.id === currentUser.id);
    if (imageIndex >= currentUser.stories.length - 1) {
      setCurentUser(userList[currentIndex + 1]);
      setImageIndex(0);
      return;
    }
    setImageIndex((prevCount) => prevCount + 1);
  };

  const moveBack = () => {
    const deneme = userList.findIndex((x) => x.id === currentUser.id);
    if (imageIndex >= currentUser.stories.length + 1) {
      setCurentUser(userList[deneme - 1]);
      setImageIndex(0);
      return;
    }
    setImageIndex((prevCount) => prevCount - 1);
  };

  return (
    <View style={styles.centeredView}>
      <Image
        source={{ uri: currentUser.stories[imageIndex] }}
        style={{
          width: windowWidth,
          height: windowWidth,
        }}
      />

      <TouchableOpacity
        onPress={moveForward}
        style={{ position: "absolute", justifyContent: "center", right: 0 }}
      >
        <View style={{ width: 100, height: 1000 }}></View>
      </TouchableOpacity>

      <Pressable
        onPress={moveBack}
        style={{ position: "absolute", justifyContent: "center", left: 0 }}
      >
        <View style={{ width: 100, height: 1000 }}></View>
      </Pressable>
    </View>
  );
};
export default Modalx;
