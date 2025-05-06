import React, { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type LuckiestGuyRegularTextProps = {
  children: ReactNode;
};

const LuckiestGuyRegularText = ({ children }: LuckiestGuyRegularTextProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "LuckiestGuy",
    fontSize: 50,
  },
});

export default LuckiestGuyRegularText;
