import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Dashboard() {
  const { userName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo, {userName || "Voluntário"} 👋
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});