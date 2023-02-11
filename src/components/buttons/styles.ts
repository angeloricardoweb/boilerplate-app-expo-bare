import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    shadowColor: "#000000",
    marginBottom: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  textWite: {
    fontFamily: "Inter_600SemiBold",
    color: colors.white,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.white,
  },
  login: {
    backgroundColor: colors.tertiary,
  },
});
