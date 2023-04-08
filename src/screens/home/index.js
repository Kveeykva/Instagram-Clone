import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import StoryCircle from "../../components/storyCircle";
import Post from "../../components/posts";
import data from "../../utilts/post.json";
import HomeBottomBar from "../../components/homeBottomBar";
import HomeTabBar from "../../components/homeTabBar";

const HomeScreen = () => {
  return (
    <>
      <HomeTabBar />
      <FlatList
        style={{ backgroundColor: "white" }}
        data={data}
        ListHeaderComponent={StoryCircle}
        renderItem={({ item }) => (
          <Post
            userName={item.userName}
            description={item.description}
            image={item.image}
            userImage={item.userImage}
            likes={item.likes}
            comments={item.comments}
          />
        )}
      />

      <HomeBottomBar />
    </>
  );
};
export default HomeScreen;
