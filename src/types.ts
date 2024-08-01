import { TextStyle, ViewStyle } from "react-native";

export interface RNCodeInputProps {
  value: string;
  onChange?: (value: string) => void;
  length?: number;
  hide?: boolean;
  showSoftInputOnFocus?: boolean;
  activeBoxStyle?: ViewStyle;
  inActiveBoxStyle?: ViewStyle;
  mask?: string;
  textStyle?: TextStyle;
  boxStyle?: ViewStyle;
  style?: ViewStyle;
}

export interface CodeBoxProps extends Partial<RNCodeInputProps> {
  index: number;
  values: string;
}
