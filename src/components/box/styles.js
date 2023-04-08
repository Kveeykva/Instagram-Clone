import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 5,
    width: 140,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    flexShrink: 1,
  },
  icon: {
    color: "white",
    paddingLeft: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default styles;
