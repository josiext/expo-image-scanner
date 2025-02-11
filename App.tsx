import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageScanner from "./components/ImageScanner";

export default function App() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Image Scanner</Text>
      <StatusBar style="auto" />
      <ImageScanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
