import React from "react";
import { View, Text, ScrollView, Pressable, TextInput, Alert } from "react-native";
import Logo from "../../../components/logo"
import styles from "./styles";
import Box from "../../../components/box";
import FooterText from "../../../components/footerText";
import data from "../../../utilts/footer.json"

const CreateAccount = ({ navigation }) => {
    const [text, onChangeUserName] = React.useState("");
    const [mail, onChangeMail] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [number, onChangeNumber] = React.useState("");




    function OnSubmit() {
        if (mail == "") {
            Alert.alert(
                "E-postanızı girmediniz!"
            )
        }
        else if (name == "") {
            Alert.alert(
                "Adınızı ve soyadınızı Girmediniz!"
            )
        }
        else if (text == "") {
            Alert.alert(
                "Kullanıcı adınızı girmediniz!"
            )
        }
        else if (number == "") {
            Alert.alert(
                "Şifrenizi girmediniz!"
            )
        }
        else {
            navigation.navigate("Home")
        }
    }


    return (
        <ScrollView>
            <View>
                <Logo />
            </View>
            <View>
                <Text style={styles.friends}>
                    Arkadaşlarının fotoğraf ve videolarını görmek için kaydol
                </Text>
            </View>
            <View >
                <Pressable style={styles.pressable_view}
                    onPress={() => navigation.navigate("Home")}  >
                    <Text style={styles.pressable_login}> Facebook ile Giriş Yap</Text>
                </Pressable>
            </View>
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

            <View style={styles.inputView}>
                <TextInput style={styles.input}
                    onChangeText={onChangeMail}
                    value={mail}
                    placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                />
                <TextInput style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="Adı Soyadı"
                />
                <TextInput style={styles.input}
                    onChangeText={onChangeUserName}
                    value={text}
                    placeholder="Kullanıcı adı"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    secureTextEntry={true}
                    placeholder="Şifre"
                />
            </View >
            <View >
                <Pressable style={[styles.pressable_createAccount,
                (mail !== "" && name !== "" && text !== "" && number !== "") ? { backgroundColor: "#0095F6" } : {}
                ]}
                    onPress={OnSubmit}  >
                    <Text style={styles.pressable_login}>Kaydol</Text>
                </Pressable>
            </View>



            <View style={{ paddingTop: 10 }}>
                <Text style={styles.service}>
                    Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a yüklemiş olabilir.

                    Daha Fazla Bilgi Al

                </Text>
            </View>
            <View style={{ paddingVertical: 10, }}>
                <Text style={styles.service}>
                    Kaydolarak, Koşullar'ı Veri İlkesi'ni ve Çerezler İlkesi'ni kabul etmiş olursun.
                </Text>
            </View>
            <View >


                <Text style={styles.pressable_login}> </Text>

            </View>
            <View>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signup}>Hesabın var mı?
                        <Text style={styles.signup_button}> Giriş yap</Text>
                    </Text>
                </Pressable>
            </View>
            <Text style={{ textAlign: "center" }}>
                Uygulamayı indir.
            </Text>

            <View style={styles.icon_container}>
                <Box icon={"apple"} text="Apple Store'dan Indirin" />
                <Box style={{ marginLeft: 10 }} icon={"google-play"} text="Google Play'den ALIN" />
            </View>

            <View style={styles.alt_yazilar}>
                {data.map((footer, index) => {
                    return <FooterText name={footer.name} key={index} />
                })}
            </View>

        </ScrollView>
    );

};
export default CreateAccount;
