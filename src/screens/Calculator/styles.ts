import { StyleSheet } from "react-native";
import { colors } from "../../config/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 10
  },
  result: {
    color: colors.white,
    fontSize: 50,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  prevValue: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.5,
    marginHorizontal: 10,
  },

})