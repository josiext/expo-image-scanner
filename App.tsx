import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageScanner from "./components/ImageScanner";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <ImageScanner dom={{ scrollEnabled: false }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
