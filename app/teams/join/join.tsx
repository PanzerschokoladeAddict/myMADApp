import { CameraView, useCameraPermissions } from "expo-camera";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.message}>
          We need your permission to use the camera
        </Text>
        <Button
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            requestPermission();
          }}
          mode="contained"
          buttonColor="#3f648f"
        >
          Grant Permission
        </Button>
      </View>
    );
  }

  function handleBarcodeScanned({ data }: { data: string }) {
    router.push({ pathname: "./joined", params: { teamName: data } });
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={handleBarcodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
      />
      <Text style={styles.instructions}>
        Point your camera at a team QR code
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  message: {
    textAlign: "center",
    paddingBottom: 16,
    fontSize: 16,
  },
  camera: {
    flex: 1,
  },
  instructions: {
    textAlign: "center",
    padding: 16,
    fontSize: 16,
  },
});
