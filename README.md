## React Native Screen Keyboard 

# Demo
<img src="https://github.com/usmangurowa/RNScreenKeyboard/blob/main/.github/demo.gif" height="500" />


React Native Screen Keyboard is a virutal screen keyboard implementation for React Native. It is fully customizable, the last row of the keys can be completely customized or changed to fit perfectly with your projects.

_**It support's Expo**_
## Installation 
#### npm

```sh
npm i rn-code-input
```
#### yarn

```sh
yarn add rn-code-input
```

## Example

```sh
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


```


<img src="https://github.com/usmangurowa/RNScreenKeyboard/blob/main/.github/example.jpg" height="500" />


<!-- # Props

| Name | Type | Default | Description |
| ------ | ------ | ------- | ----------- |
| cellStyle | ViewStyle | 
| textStyle | TextStyle |
| rowStyle | ViewStyle | 
| onKeyPress | func | 
| backspaceTint | string | black
| BackSpaceComponent | React.ReactNode | backspace image
| Left | React.ReactNode |
| Center | React.ReactNode |
| Right | React.ReactNode | -->


## License

MIT

MIT License

Copyright (c) 2022 Usman Hassan
