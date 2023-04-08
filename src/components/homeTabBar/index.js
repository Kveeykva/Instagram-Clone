import React from "react";
import { View, Text, Pressable, TouchableOpacity, SafeAreaView } from "react-native";
import Logo from "../logo";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';

const HomeTabBar = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View style={styles.icons}>
                <Logo style={{
                    left: 10,
                    width: 100,
                    height: 60,
                }} />
                <View style={styles.rightIcons}>
                    <Feather name="plus-square" size={22} color="black" />
                    <AntDesign style={{ paddingHorizontal: 30 }} name="hearto" size={22} color="black" />
                    <FontAwesome5 name="facebook-messenger" size={22} />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default HomeTabBar;
