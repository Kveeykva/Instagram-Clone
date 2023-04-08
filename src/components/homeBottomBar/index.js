import React from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const HomeBottomBar = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Ionicons name="home-outline" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Search")} >
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")} >
                    <MaterialCommunityIcons name="television-play" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")} >
                    <Feather name="shopping-bag" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")} >
                    <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );

};

export default HomeBottomBar;