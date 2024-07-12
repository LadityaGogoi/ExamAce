import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href="/onboard" style={styles.link}>
          <Text style={styles.linkText}>Go to Onboard Screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontFamily: "VarelaFont",
    fontSize: 20,
  },
  link: {
    fontFamily: "VarelaFont",
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontFamily: "VarelaFont",
    fontSize: 16,
    color: "#2e78b7",
  },
});
