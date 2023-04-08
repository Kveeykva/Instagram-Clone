import React from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import Logo from "../../../components/logo";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";
import FooterText from "../../../components/footerText";
import data from "../../../utilts/footer.json"


const ForgetPassword = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");

    return (
        <>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgrey" }}>
                <Logo style={{
                    alignSelf: "flex-start",
                    width: 100,
                    height: 60,


                }} />
            </View>
            <ScrollView>


                <View style={styles.line}>
                    <Text> </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <View style={styles.circle}>
                        <AntDesign name="lock" size={80} color="black" style={{ alignSelf: "center", paddingTop: 5 }} />
                    </View>
                </View>
                <View>
                    <Text style={{ textAlign: "center", paddingTop: 10, }}>
                        Giriş Yaparken Sorun mu Yaşıyorsun?
                    </Text>
                    <Text style={styles.offer}>
                        E-Posta adresini, telefon numaranı veya kullanıcı adını gir ve heasbına yeniden girebilmen için
                        sana bir bağlantı gönderelim.
                    </Text>
                </View>

                <View style={styles.inputView}>
                    <TextInput style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="E-posta, Telefon veya Kullanıcı Adı"
                    />
                </View >

                <Pressable
                    onPress={() => navigation.navigate("Login")}>
                    <View style={[styles.pressable_view,
                    text !== "" && { backgroundColor: "#0095F6" }
                    ]}>
                        <Text style={styles.pressable_login}  >Giriş Bağlantısı Gönder</Text>
                    </View>
                </Pressable>




                <View style={{
                    flexDirection: 'row', alignItems: 'center', width: "70%", marginRight: "auto",
                    marginLeft: "auto",
                }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: "grey", fontWeight: "bold" }}>YA DA</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
                </View>


                <Pressable onPress={() => navigation.navigate("CreateAccount")}>
                    <Text style={styles.createAccount}>Yeni Hesap Oluştur</Text>
                </Pressable>

                <View style={styles.startScreen}>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.goLoginScreen}>Giriş Ekranına Dön</Text>
                    </Pressable>
                </View>

                <View style={styles.alt_yazilar}>
                    {data.map((x, index) => {
                        return <FooterText name={x.name} key={index} />
                    })}
                </View>




            </ScrollView>
        </>
    );
};
export default ForgetPassword;
