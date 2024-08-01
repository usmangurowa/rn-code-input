import React from "react";
import { StyleSheet, View } from "react-native";

import RNScreenKeyboard from "rn-screen-keyboard";
import RNCodeInput from "rn-code-input";

export default function App() {
  const [value, setValue] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <RNCodeInput
        value={value}
        length={5}
        activeBoxStyle={{
          borderColor: "red"
        }}
        inActiveBoxStyle={{
          borderColor: "gray"
        }}
        boxStyle={{
          borderRadius: 99,
          marginHorizontal: 5
        }}
        hide
      />
      <RNScreenKeyboard
        value={value}
        onKeyPress={setValue}
        cellStyle={{
          borderRadius: 99
        }}
        Footer={null}
        rowStyle={{
          width: "80%",
          justifyContent: "space-between",
          marginVertical: 10
        }}
        textLength={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
