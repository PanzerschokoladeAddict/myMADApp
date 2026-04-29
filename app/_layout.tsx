import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="setup" options={{ headerShown: true }} />
      <Stack.Screen name="join" options={{ headerShown: true }} />
    </Stack>
  );
}
