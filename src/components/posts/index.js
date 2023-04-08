import React, { useRef } from "react";
import { View, Text, Image, Animated, Easing, Pressable } from "react-native";
import styles from "./styles"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const Post = (props) => {

    const description = props.description

    const likeAnim = useRef(new Animated.Value(0.5)).current;
    const LikeFunc = () => {

        Animated.sequence([
            Animated.timing(likeAnim, {
                toValue: 0.5,
                duration: 0,
                useNativeDriver: true,

            }),
            Animated.timing(likeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
                easing: Easing.bounce
            }),
            Animated.delay(250),
            Animated.timing(likeAnim, {
                toValue: 0.5,
                duration: 0,
                useNativeDriver: true,

            })
        ]).start()
    }


    return (


        <View style={styles.allIn} >
            <View style={styles.main} >
                <View style={{ flexDirection: "row" }}>
                    <Image source={{
                        uri: props.userImage
                    }}
                        style={styles.userImage}
                    />
                    <Text style={styles.userName}>{props.userName}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={16} color="#262626"
                    style={{ paddingTop: 10, paddingRight: 15 }} />
            </View>

            <Pressable onPress={LikeFunc} >
                <Image
                    source={{
                        uri: props.image
                    }}
                    style={styles.postImage}
                />

                <Animated.View style={[styles.likeView,
                {
                    transform: [{ scale: likeAnim }], opacity: likeAnim.interpolate({
                        inputRange: [0.5, 0.6, 1],
                        outputRange: [0, 1, 1]
                    })
                }
                ]}>
                    <AntDesign style={styles.likeIcon} name="heart" size={100} color="white" />
                </Animated.View>
            </Pressable>
            <View style={{ flexDirection: "row", paddingTop: 10, left: 15 }}>
                <AntDesign name="hearto" size={24} color="black" />
                <FontAwesome5 style={{ paddingHorizontal: 30 }} name="comment" size={24} color="black" />
                <FontAwesome name="send-o" size={24} color="black" />
            </View>
            <View>
                <Text style={{ fontSize: 14, fontWeight: "500", paddingLeft: 10, paddingTop: 5 }}> {props.likes} </Text>
                <Text style={{ fontSize: 14, fontWeight: "500", paddingLeft: 10, paddingBottom: 10 }}> {props.userName}
                    <Text style={{ fontWeight: "normal", fontSize: 14 }}> {description} </Text>
                </Text>
                <Text style={{ color: "#8e8e8e", fontSize: 14, paddingLeft: 14, paddingBottom: 10 }}>{props.comments}</Text>
            </View>
        </View>
    );

};

export default Post;
