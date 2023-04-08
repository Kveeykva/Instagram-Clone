import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import Box from "../../../components/box";
import data from "../../../utilts/footer.json";
import FooterText from "../../../components/footerText";
import { FontAwesome5 } from "@expo/vector-icons";
import Logo from "../../../components/logo";

const LoginScreen = ({ navigation, props }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  function OnSubmit() {
    if (text == "") {
      Alert.alert(" Kullanıcı adınızı girmediniz!");
    } else if (number == "") {
      Alert.alert("Şifrenizi doldurmadınız!");
    } else {
      navigation.navigate("Home");
    }
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Logo />
      <View style={styles.input_view}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Telefon numarası, kullanıcı adı veya e-posta"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          secureTextEntry={true}
          placeholder="Şifre"
        />
      </View>

      <Pressable onPress={OnSubmit}>
        <View
          style={[
            styles.pressable_view,
            (text && number) !== "" && { backgroundColor: "#0095F6" },
          ]}
        >
          <Text style={styles.pressable_login}>Giriş Yap</Text>
        </View>
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "70%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "lightgrey" }} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: "center",
              color: "grey",
              fontWeight: "bold",
            }}
          >
            YA DA
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "lightgrey" }} />
      </View>
      <Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 16,
          }}
        >
          <AntDesign name="facebook-square" size={20} color="#385185" />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 14,
              fontWeight: "600",
              color: "#385185",
            }}
          >
            Facebook ile Giriş Yap
          </Text>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Password")}>
        <Text style={styles.forget_password}>Şifreni mi unuttun?</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("CreateAccount")}>
        <Text style={styles.signup}>
          Hesabın yok mu?
          <Text style={styles.signup_button}> Kaydol</Text>
        </Text>
      </Pressable>

      <Text style={styles.download}>Uygulamayı indir.</Text>
      <View style={styles.icon_container}>
        <Box icon={"apple"} text="Apple Store'dan Indirin" />
        <Box
          style={{ marginLeft: 10 }}
          icon={"google-play"}
          text="Google Play'den ALIN"
        />
      </View>
      <View style={styles.alt_yazilar}>
        {data.map((x, index) => {
          return <FooterText name={x.name} key={index} />;
        })}
      </View>
      <View>
        <Text style={styles.launguage}>
          {" "}
          Türkçe <FontAwesome5
            name="chevron-down"
            size={11}
            color="#8e8e8e"
          />{" "}
          2022 Instagram from Meta{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
