import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
  },
});
