import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    marginHorizontal: "auto"
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  input: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    letterSpacing: 50
  },
  text: {
    color: "#000",
    verticalAlign: "middle"
  }
});

export default styles;
