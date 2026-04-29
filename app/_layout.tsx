import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: true }} />
      <Stack.Screen name="scan" options={{ headerShown: false }} />
      <Stack.Screen name="joined" options={{ headerShown: true }} />
    </Stack>
  );
}
