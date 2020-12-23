import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { Color } from "../constants/color";

export default StyleSheet.create({
  row: {
    flex: 1,
    height: RFValue(60),
    flexDirection: "row",
    paddingHorizontal: RFValue(12),
    alignItems: "center",
  },

  separator: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.grey,
  },

  circle: {
    width: RFValue(45),
    height: RFValue(45),
    maxWidth: RFValue(45),
    maxHeight: RFValue(45),
    borderRadius: RFValue(45),
    backgroundColor: Color.main_color,
  },

  text1: {
    paddingLeft: RFValue(10),
    fontSize: RFValue(14),
  },

  icon: {
    paddingHorizontal: 15,
    color: Color.main_color,
    fontSize: 20,
  },
});
