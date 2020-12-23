import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { Color } from "../constants/color";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  bigCircle: {
    width: RFValue(90),
    height: RFValue(90),
    maxWidth: RFValue(90),
    maxHeight: RFValue(90),
    borderRadius: RFValue(90),
    backgroundColor: Color.main_color,
    marginVertical: RFValue(15),
    borderBottomColor: Color.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: Color.main_color,
  },

  row: {
    flex: 1,
    height: RFValue(40),
    flexDirection: "row",
    paddingHorizontal: RFValue(12),
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Color.grey,
  },

  text1: {
    flex: 1,
    fontSize: RFValue(12),
  },

  input1: {
    flex: 2,
    borderRadius: RFValue(5),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.grey,
    padding: RFValue(5),
    fontSize: RFValue(12),
  },

  textSection: {
    backgroundColor: "#F7F7F7",
    alignSelf: "stretch",
    textAlign: "left",
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(8),
    fontWeight: "bold",
    fontSize: RFValue(12),
  },

  headerText: {
    paddingHorizontal: 15,
    color: Color.main_color,
    fontSize: 16,
  },
});
