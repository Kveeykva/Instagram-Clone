import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import users from "../../utilts/userList.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StoryCircle = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        borderBottomWidth: 0.2,
        borderColor: "grey",
        backgroundColor: "white",
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ padding: 5 }}>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/1QqSuA5Eg7F6E7L5UBY9doiHpYb5OEo5oS4B5m5qu7K2qqJFpeUc2UqJuaf96Nbnr0Pv17zjmEMFyP595w7lNvJYvIc6vjcksgBi_Ytb0hxE6cYDcIFtRpAWn6nkhhBq72ORcW-ukDC2hfVTZrsAS7pFhnWE16CchKDjeJlj9fS9VEm0EG00adwdeCCZPPLjUREA5sxhexOuRl_z9w2SpeAYh1L36qjFtrXPUftV7danMlxUMOylCr6n0N2s6M35G7ai52yX4tXPtOBlQXzL3mGg3_3yG9jsvF8GM4srQfGeQ1G-rOG7bZU840VPRXAdS-IrLiEfRA1pa5SFhiWzje8gdRv2vGdIIppiK4mzNMlOYALzVfmDrR2vjhD01dYgfLZ3dgjt6m2nEBK5xR3f9JGhK4kYf2pGvjVk7gJGk0J0WQwMQhi84CLYpbL1TI_nCdP9McQu8DVd1rGfxtrLCkVHQqCOxg5tqPrR5rCP9hlkfje6t3wYIipVLN8LIqNaxfSnH2exRBztmLRxGpr5rHQ7ngLwxkexGQrFV-Z41TOQZcKi-O5J66Oxy_SV_9dBsGdoa6Iv-Tuaho8DQZsRiWwGb-zhRwzaJcMfxZ6f1d59f_sgStOf9rvjMT2sTxgxeumZmZHjJ7wF4dn8GxpOPQGgpz01AqjkFLhe2ukeJ3XyXFOIK04xDslLVLfVYvtPu511f7Jvbdt1992Zq7dLS2D1og3gDKl0_H5IFfkzTZ8Q38-PCDpxKcwqlxQAPz47iFuasVkECy0EsAgaqE9tW8KS71lCUSJx6f0M=w696-h927-no?authuser=0",
          }}
          style={styles.userImage}
        />
        <View style={{ position: "absolute" }}>
          <View style={styles.addBtnContainer}>
            <AntDesign
              style={styles.addBtn}
              name="pluscircleo"
              size={12}
              color="white"
            />
          </View>
          <View>
            <Text style={styles.yourStory}>Hikayen</Text>
          </View>
        </View>
      </View>

      {users
        .filter((x) => x.stories.length > 0)
        .map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              navigation.navigate("Modal", { imgUrl: item.stories, user: item })
            }
          >
            <View style={{ width: 80, padding: 5 }}>
              <LinearGradient
                colors={["#bc2a8d", "#e95950", "#fccc63"]}
                style={{ padding: 2, borderRadius: 50 }}
              >
                <Image source={{ uri: item.photo }} style={styles.userImage} />
              </LinearGradient>
              <Text style={styles.userName} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
};
export default StoryCircle;
