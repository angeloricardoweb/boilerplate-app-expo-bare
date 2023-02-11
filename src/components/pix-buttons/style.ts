import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ice,
    width: "100%",
    flexDirection: "row",
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000000",
    marginBottom: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 3,
  },
  icoWrapperActive: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  icoWrapperInactive: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: colors.gray,
  },
  typeWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  type: {
    fontFamily: "Inter_400Regular",
    marginLeft: 16,
    color: colors.gray,
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    marginRight: 16,
  },
  iconForward:{
    color: colors.primary,
    marginRight: 16,
    fontSize: 24,
  },
  iconType:{
    color: colors.white,
    fontSize: 24,
  }
});
