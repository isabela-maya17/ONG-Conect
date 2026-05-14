import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.table({ email, senha });

    if (email.includes("@") && senha.length > 6) {
      const id = Math.floor(Math.random() * 10000);

      console.log(" Acesso autorizado para:", email);

      router.replace({
        pathname: "/(tabs)/dashboard",
        params: {
          userName: email,
          voluntarioId: id.toString(),
        },
      });

    } else {
      console.log(" Falha no login: E-mail inválido ou senha muito curta.");
    }
  };

  return (
    <View style={styles.container}>

      
      <View style={styles.top}>
        <Text style={styles.logo}>ONG CONNECT</Text>
      </View>

    
      <View style={styles.center}>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />

       
        <Text style={styles.preview}>
          Logando como: {email || "aguardando e-mail..."}
        </Text>

      </View>

      
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#22C55E",
  },

  center: {
    flex: 2,
    justifyContent: "center",
  },

  label: {
    color: "#CBD5E1",
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 10,
    color: "#FFF",
  },

  preview: {
    marginTop: 15,
    color: "#94A3B8",
    fontSize: 12,
  },

  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#22C55E",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#0F172A",
    fontWeight: "bold",
  },
});