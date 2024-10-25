import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface RNCodeInputProps {
  value: string;
  onChange?: (value: string) => void;
  length?: number;
  hide?: boolean;
  showSoftInputOnFocus?: boolean;
  activeBoxStyle?: ViewStyle;
  inActiveBoxStyle?: ViewStyle;
  filledBoxStyle?: ViewStyle;
  mask?: string;
  textStyle?: TextStyle;
  boxStyle?: ViewStyle;
  style?: ViewStyle;
  inputProps?: Partial<
    Omit<TextInputProps, "onChange" | "value" | "maxLength">
  >;
}

export interface CodeBoxProps extends Partial<RNCodeInputProps> {
  index: number;
  values: string;
}
