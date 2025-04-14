import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import exerciciosData from '../data/listaExercicios.json';

const BASE_URL = "http://localhost:3000";

const Exercicios = () => {
    return (
        <LinearGradient
            colors={["#021123", "#021123"]}
            style={style.container}
        >
            <ScrollView>
                <View style={style.scrollList}>
                    <Text style={style.titulo}>Seus treinos</Text>
                    {exerciciosData.map((exercicio) => (
                        <View key={exercicio._id} style={style.card}>
                            <Text style={style.textCard}>{exercicio.nome}</Text>
                            <Image source={{ uri: `${BASE_URL}/${exercicio.imagem}` }}
                                style={style.imagem}
                                resizeMode="contain" />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 20,
        gap: 20,
    },
    imagem: {
        objectFit: "contain",
        width: "100%",
        height: 300,
    },
    titulo: {
        color: "#FFF",
        fontFamily: "Montserrat_700Bold",
        fontSize: 24,
        textTransform: 'uppercase'
    },
    scrollList: {
        gap: 20,
    },
    card: {
        width: "100%",
        padding: 20,
        backgroundColor: "rgba(152, 160, 171, 0.2)",
        borderRadius: 10,
        borderColor: '#98A0AB',
        borderWidth: 1,
        gap: 10
    },
    textCard: {
        color: "#FFF",
        fontSize: 14,
        fontFamily: "Montserrat_600SemiBold",
        textTransform: "uppercase"
    },
    data: {
        color: "#FFF",
        fontSize: 12,
        fontFamily: "Montserrat_500Medium",
    }
})
export default Exercicios;