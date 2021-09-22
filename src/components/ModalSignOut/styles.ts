import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: "flex-end",
  },
  container: {
    height: 150,
    marginTop: 26,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 26,
  },
  titleDetails: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 18,
  },
  titleComponentDetails: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 22,
  },
  titleComponentDetails2: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
    fontSize: 22,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
  },
});
