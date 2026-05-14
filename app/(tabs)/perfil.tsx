import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Perfil() {
  const params = useLocalSearchParams();
  const userName = params.userName as string;

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Perfil do voluntário: {userName || "Desconhecido"}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            "Editar Interesses",
            "Escolha suas causas",
            [
              { text: "Educação" },
              { text: "Meio Ambiente" },
              { text: "Saúde" },
              { text: "Cancelar", style: "cancel" },
            ]
          )
        }
      >
        <Text style={styles.buttonText}>Editar Interesses</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  text: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#22C55E",
    padding: 12,
    borderRadius: 10,
    width: "100%",
  },

  buttonText: {
    color: "#0F172A",
    fontWeight: "bold",
    textAlign: "center",
  },
});