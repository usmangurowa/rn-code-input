## rn-code-input

This package provides a React Native component for creating a secure and customizable code input field. It allows users to enter a series of digits or characters and provides visual feedback as they type.

### Features

* **Secure Input:** The component displays a mask (e.g., ●) over the entered characters, improving security for one-time passwords (OTPs) or PINs.
* **Customization:** You can customize the appearance of individual code boxes using props like `activeBoxStyle`, `inActiveBoxStyle`, `textStyle`, and `boxStyle`.
* **Flexibility:** Set the desired code length with the `length` prop.
* **Optional Soft Keyboard Focus:** Control whether the soft keyboard appears automatically when the component receives focus with the `showSoftInputOnFocus` prop.

### Installation

```bash
npm install rn-code-input
```

or

```bash
yarn add rn-code-input
```

### Usage

Import the `RNCodeInput` component in your React Native project:

```javascript
import RNCodeInput from "rn-code-input";
```

**Basic Usage:**

```javascript
import React, { useState } from "react";
import { View } from "react-native";

import RNCodeInput from "rn-code-input";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (text) => setValue(text);

  return (
    <View>
      <RNCodeInput value={value} length={6} onChange={handleChange} />
    </View>
  );
};

export default App;
```

### Props

**RNCodeInput Props:**

* `value`: (string) - The current entered code.
* `onChange`: (function) - Callback function triggered when the code changes.
* `length`: (number) - (Optional) The desired number of code boxes (default: 6).
* `hide`: (boolean) - (Optional) Whether to display a mask over the entered characters (default: false).
* `showSoftInputOnFocus`: (boolean) - (Optional) Whether to show the soft keyboard automatically when the component receives focus (default: false).
* `activeBoxStyle`: (ViewStyle) - (Optional) Styles applied to the active code box (e.g., when focused).
* `inActiveBoxStyle`: (ViewStyle) - (Optional) Styles applied to inactive code boxes.
* `mask`: (string) - (Optional) The character to display as a mask for entered characters (default: ●).
* `textStyle`: (TextStyle) - (Optional) Styles applied to the text displayed within the code boxes.
* `boxStyle`: (ViewStyle) - (Optional) Styles applied to individual code boxes.
* `style`: (ViewStyle) - (Optional) Styles applied to the overall container view.

**CodeBox Props:** (These props are passed internally and not intended for direct use)

* `value`: (string) - The character entered in this specific code box.
* `values`: (string) - The entire entered code value.
* `index`: (number) - The index of this specific code box within the group.
* `hide`: (boolean) - Whether to display a mask in this code box.
* `activeBoxStyle`: (ViewStyle) - Styles applied to the active code box.
* `inActiveBoxStyle`: (ViewStyle) - Styles applied to the inactive code box.
* `filledBoxStyle`: (ViewStyle) - Styles applied to the filled boxes.
* `mask`: (string) - The character to display as a mask.
* `textStyle`: (TextStyle) - Styles applied to the text displayed within the code box.
* `boxStyle`: (ViewStyle) - Styles applied to this specific code box.

### Example

This example demonstrates a basic code input with a custom active box style:

```javascript
import React, { useState } from "react";
import { View } from "react-native";

import RNCodeInput from "rn-code-input";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (text) => setValue(text);

  return (
    <View>
      <RNCodeInput
        value={value}
        length={5}
        onChange={handleChange}
        activeBoxStyle={{ borderColor: "red" }}
        inActiveBoxStyle={{ borderColor: "gray" }}
        filledBoxStyle={{ borderColor: "green" }}
        boxStyle={{ borderRadius: 99, marginHorizontal: 5 }}
        hide
      />
    </View>
  );
};

export default App;
```

### Contributing

Feel free to submit pull requests for bug fixes or improvements to this package.
