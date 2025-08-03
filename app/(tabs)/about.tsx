import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>Thank You For Visiting My Mobile App!!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7d887eff",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  }
})
