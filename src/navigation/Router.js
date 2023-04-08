import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/login";
import HomeScreen from "../screens/home";
import ForgetPassword from "../screens/auth/forgetPassword";
import CreateAccount from "../screens/auth/createAccount";
import Modalx from "../components/modal";
import SearchScreen from "../screens/auth/searchScreen";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name={"Login"} component={LoginScreen} />
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Password"} component={ForgetPassword} />
        <Stack.Screen name={"CreateAccount"} component={CreateAccount} />
        <Stack.Screen name={"Search"} component={SearchScreen} />
        <Stack.Group>
          <Stack.Screen name={"Modal"} component={Modalx} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
