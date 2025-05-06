// SpacemonoText.tsx

import React, { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type SpacemonoTextprops = {
  children: ReactNode;
};

const SpacemonoText = ({ children }: SpacemonoTextprops) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: "SpaceMono",
  },
});

export default SpacemonoText;
