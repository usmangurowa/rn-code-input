import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./style";
import { CodeBoxProps, RNCodeInputProps } from "./types";

const RnCodeInput = ({
  onChange,
  value,
  length = 6,
  hide = false,
  showSoftInputOnFocus = false,
  activeBoxStyle,
  inActiveBoxStyle,
  mask = "●",
  textStyle,
  boxStyle,
  style
}: RNCodeInputProps) => {
  const getValue = React.useCallback((index: number) => value[index] || "", [value]);

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length }).map((_, index) => (
        <CodeBox
          key={index}
          hide={hide}
          index={index}
          value={getValue(index)}
          values={value}
          activeBoxStyle={activeBoxStyle}
          inActiveBoxStyle={inActiveBoxStyle}
          mask={mask}
          textStyle={textStyle}
          boxStyle={boxStyle}
        />
      ))}

      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        showSoftInputOnFocus={showSoftInputOnFocus}
        onChangeText={onChange}
        value={value}
        maxLength={length}
      />
    </View>
  );
};

export default RnCodeInput;

const CodeBox = ({
  value,
  values,
  index,
  hide = false,
  activeBoxStyle,
  inActiveBoxStyle,
  mask,
  textStyle,
  boxStyle
}: CodeBoxProps) => {
  const isActive = React.useMemo(() => values.length === index, [values, index]);
  return (
    <View
      key={index}
      style={[
        styles.box,
        { borderColor: isActive ? "#000" : "#ccc" },
        boxStyle,
        isActive ? activeBoxStyle : inActiveBoxStyle
      ]}>
      {!!value && <Text style={[styles.text, textStyle]}>{hide ? mask : value}</Text>}
    </View>
  );
};
