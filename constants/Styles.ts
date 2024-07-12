import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
  Regular: {
    fontFamily: "VarelaFont",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
    color: Colors.dark[700],
  },
  Bold: {
    fontFamily: "VarelaFont",
    fontSize: 24,
    lineHeight: 26,
    color: Colors.light[200]
  }
});
