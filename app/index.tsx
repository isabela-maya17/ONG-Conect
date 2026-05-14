import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>

      {/* TOPO */}
      <View style={styles.top}>
        <Text style={styles.logo}>🌱 ONG CONNECT</Text>
      </View>

      {/* MEIO */}
      <View style={styles.middle}>
        <Text style={styles.title}>Faça parte da mudança</Text>

        <Text style={styles.subtitle}>
          Conectamos voluntários a causas que transformam vidas.
        </Text>
      </View>

      {/* BOTÕES */}
      <View style={styles.bottom}>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.primaryText}>Conhecer Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.link}>Já tenho conta</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    padding: 20,
  },

  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#34D399",
  },

  middle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 12,
    paddingHorizontal: 10,
  },

  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 14,
    marginBottom: 30,
  },

  primaryButton: {
    backgroundColor: "#34D399",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },

  primaryText: {
    color: "#0F172A",
    fontWeight: "bold",
  },

  link: {
    color: "#FFFFFF",
    textDecorationLine: "underline",
  },
});