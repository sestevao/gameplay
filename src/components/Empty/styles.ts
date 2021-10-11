import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    color: theme.colors.secondary30,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    width: 240,
    marginBottom: 12,
  },
});
