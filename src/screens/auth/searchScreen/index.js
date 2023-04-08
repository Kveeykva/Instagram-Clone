import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  StatusBar,
} from "react-native";
import styles from "./styles";
import HomeBottomBar from "../../../components/homeBottomBar";
import searchPost from "../../../utilts/searchPost.json";

const SearchScreen = (props) => {
  const [search, onChangeSearch] = useState();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 15 }}>
      <StatusBar animated={true} barStyle={"default"} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeSearch}
          value={search}
          placeholder={"Search"}
        />
      </View>

      <FlatList
        horizontal={false}
        numColumns={3}
        style={styles.imageList}
        data={searchPost}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              source={{ uri: item.postImage }}
              style={styles.postImageView}
            />
          </TouchableOpacity>
        )}
      />

      <View style={styles.bottomTabBar}>
        <HomeBottomBar />
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
