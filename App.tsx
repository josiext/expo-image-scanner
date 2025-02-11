import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageScanner from "./components/ImageScanner";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageScanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
