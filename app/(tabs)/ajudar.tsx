import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, router } from "expo-router";

export default function Ajudar() {
  const params = useLocalSearchParams();
  const userName = params.userName;

  const [mensagem, setMensagem] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Quero ajudar 💚</Text>

      <Text style={styles.subtitle}>
        Voluntário: {userName || "Desconhecido"}
      </Text>

      <Text style={styles.label}>Mensagem / Interesse</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Quero ajudar com educação..."
        placeholderTextColor="#64748B"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!mensagem) {
            Alert.alert("Erro", "Escreve algo antes de enviar");
            return;
          }

          Alert.alert("Sucesso", "Interesse enviado com sucesso 💚");
          console.log("Pedido de ajuda:", mensagem);

          router.back();
        }}
      >
        <Text style={styles.buttonText}>Enviar pedido</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#94A3B8",
    marginBottom: 20,
  },

  label: {
    color: "#CBD5E1",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 10,
    color: "#FFF",
    height: 120,
    textAlignVertical: "top",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#22C55E",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#0F172A",
    fontWeight: "bold",
  },
});