import { View, Text, FlatList, ActivityIndicator, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import ONGCard from "../../components/ONGCard";
import { router } from "expo-router";

type ONG = {
  id: string;
  nome: string;
  causa: string;
  imagem: string;
};

export default function Explorar() {
  const [ongs, setOngs] = useState<ONG[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedONG, setSelectedONG] = useState<ONG | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOngs([
        {
          id: "1",
          nome: "Ajuda Brasil",
          causa: "Educação",
          imagem: "https://www.google.com/imgres?q=educa%C3%A7%C3%A3o&imgurl=https%3A%2F%2Fwordpress-cms-revista-prod-assets.quero.space%2Flegacy_posts%2Fpost_images%2F44463%2Fb1250c626075e5da5ab6fef7cfbf8637e0c6d32a.jpg%3F1682696027&imgrefurl=https%3A%2F%2Fquerobolsa.com.br%2Frevista%2Fdia-da-educacao-veja-quando-foi-criado-e-porque-e-dia-28-de-abril&docid=VUxK2DbVolaKFM&tbnid=HFPOvGe42aFt9M&vet=12ahUKEwiyyrSh77iUAxUkqZUCHZkPM7IQnPAOegQIHRAB..i&w=1500&h=1145&hcb=2&ved=2ahUKEwiyyrSh77iUAxUkqZUCHZkPM7IQnPAOegQIHRAB",
        },
        {
          id: "2",
          nome: "Verde Vivo",
          causa: "Meio Ambiente",
          imagem: "https://www.google.com/imgres?q=meio%20ambiente&imgurl=https%3A%2F%2Fservices.meteored.com%2Fimg%2Farticle%2Fdia-mundial-del-medio-ambiente-el-planeta-necesita-que-nos-convirtamos-en-la-generacion-restauracion-340781-1_512.jpeg&imgrefurl=https%3A%2F%2Fwww.tempo.com%2Fnoticias%2Factualidade%2Fdia-ambiente-mundial-2021-o-planeta-precisa-de-nos-para-se-tornar-a-geracao-restaura-ao.html&docid=BMDe2lpmlBkVZM&tbnid=6ZV2oFOTe8O2ZM&vet=12ahUKEwiiwerk77iUAxXsq5UCHfAvM9gQnPAOegQIFBAB..i&w=512&h=360&hcb=2&ved=2ahUKEwiiwerk77iUAxXsq5UCHfAvM9gQnPAOegQIFBAB",
        },
        {
          id: "3",
          nome: "Saúde Já",
          causa: "Saúde",
          imagem: "https://www.google.com/imgres?q=sa%C3%BAde&imgurl=https%3A%2F%2Fsmetal.org.br%2Fwp-content%2Fuploads%2F2024%2F04%2FinternasaudeOMS-1016x762.png&imgrefurl=https%3A%2F%2Fsmetal.org.br%2Fimprensa%2Fminha-saude-meu-direito-e-tema-do-dia-mundial-da-saude%2F&docid=GUyTQo4k35HauM&tbnid=FBLpE5-9oOXDWM&vet=12ahUKEwidvZ3y77iUAxX9ppUCHbL-GMgQnPAOegQIHRAB..i&w=1016&h=762&hcb=2&ved=2ahUKEwidvZ3y77iUAxX9ppUCHbL-GMgQnPAOegQIHRAB",
        },
      ]);

      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#22C55E" />
        <Text style={styles.loadingText}>Carregando ONGs...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Explorar ONGs</Text>

      {/* LISTA */}
      <FlatList
        data={ongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ONGCard
            nome={item.nome}
            causa={item.causa}
            imagem={item.imagem}
            onPress={() => {
              setSelectedONG(item);
              setModalVisible(true);
            }}
          />
        )}
      />

      {/* MODAL */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>
              {selectedONG?.nome}
            </Text>

            <Text style={styles.modalText}>
              🌱 Causa: {selectedONG?.causa}
            </Text>

            <Text style={styles.modalText}>
              Essa ONG atua em projetos voltados para {selectedONG?.causa}.
            </Text>

            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => {
                console.log("Quero ajudar:", selectedONG?.nome);
                router.push("/(tabs)/ajudar");
                setModalVisible(false);
              }}
              disabled={!selectedONG}
            >
              <Text style={styles.actionText}>Quero ajudar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeBtn}
            >
              <Text style={{ color: "#fff" }}>Fechar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#FFF",
    marginTop: 10,
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  actionBtn: {
    backgroundColor: "#22C55E",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  actionText: {
    color: "#0F172A",
    fontWeight: "bold",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },

  modalText: {
    color: "#94A3B8",
    marginBottom: 10,
  },

  closeBtn: {
    backgroundColor: "#22C55E",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});