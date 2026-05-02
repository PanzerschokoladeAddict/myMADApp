import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SetUp() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        onSkip={() => router.push("/teams/setup")}
        onDone={() => router.push("/teams/setup")}
        pages={[
          {
            backgroundColor: "#4c8f3f",
            image: <></>,
            title: "Welcome to STEMM Lab",
            subtitle:
              "A hands-on science challenge app for curious minds. Compete, explore, and discover!",
          },
          {
            backgroundColor: "#3a7bd5",
            image: <></>,
            title: "Team Challenges",
            subtitle:
              "Work together as a team to complete real-world science and engineering activities.",
          },
          {
            backgroundColor: "#e8a838",
            image: <></>,
            title: "Record Your Results",
            subtitle:
              "Capture videos, log your data, and compare your results against other teams on the leaderboard.",
          },
          {
            backgroundColor: "#9b59b6",
            image: <></>,
            title: "Ready to Begin?",
            subtitle:
              "Create a new team or join an existing one to start your STEMM Lab adventure!",
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
