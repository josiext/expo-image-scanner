import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  Platform,
  PermissionsAndroid,
  Alert,
  Button,
} from "react-native";
import DocumentScanner from "react-native-document-scanner-plugin";
import { createPdf } from "react-native-images-to-pdf";
import * as FileSystem from "expo-file-system";

export default () => {
  const [scannedImage, setScannedImage] = useState("");

  const scanDocument = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );

      if (
        permission !== PermissionsAndroid.RESULTS.GRANTED &&
        permission !== PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
      ) {
        Alert.alert(
          "Error",
          "User must grant camera permissions to use document scanner."
        );
        return;
      }

      await DocumentScanner.scanDocument()
        .then(({ scannedImages }) => {
          if (!scannedImages?.length) {
            throw new Error("No images scanned");
          }

          return createPdf({
            pages: scannedImages.map((imagePath) => ({ imagePath })),
            outputPath: FileSystem.documentDirectory + "scanned.pdf",
          });
        })
        .then((path) => console.log(`PDF created successfully: ${path}`))
        .catch((error) => console.log(`Failed to create PDF: ${error}`));
    } catch (e) {
      console.log(e);
    }
  };

  const text = "Hello World";

  return (
    <View>
      <Text
        style={{
          marginTop: 60,
          fontSize: 20,
        }}
      >
        {text}
      </Text>
      <Button title="scan" onPress={scanDocument} />
    </View>
  );
};
