import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type Props = {
  nome: string;
  causa: string;
  imagem: string;
  onPress?: () => void;
};

export default function ONGCard({ nome, causa, imagem, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>

      <Image
        source={{ uri: imagem }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.causa}>{causa}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",

    // sombra leve (Parte 6)
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: "#0F172A",
  },

  info: {
    flex: 1,
  },

  nome: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  causa: {
    color: "#94A3B8",
    marginTop: 4,
  },
});