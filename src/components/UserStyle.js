import { StyleSheet } from "react-native";

export default StyleSheet.create({
  viewStyle: {
    backgroundColor: "#b6dedb",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imgStyle: { width: 20, height: 20 },
  textStyle: { fontSize: 18, marginLeft: 10, color: "#2aa198" },
});
