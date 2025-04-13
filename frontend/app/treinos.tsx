import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import treinosData from '../data/treinos.json';
import { router } from 'expo-router';

const Treinos = () => {
    // console.log(treinosData);
    return (
        <LinearGradient
            colors={["#021123", "#021123"]}
            style={style.container}
        >
            <Text style={style.titulo}>Seus treinos</Text>
            {treinosData.map(treino => (
                <TouchableOpacity onPress={() => { router.push('/exercicios') }} style={style.card}>
                    <Text style={style.textCard}>{treino.nome}</Text>
                    <Text style={style.data}>Criado em: { Intl.DateTimeFormat('pt-BR').format(new Date(treino.criadoEm)) }</Text>
                </TouchableOpacity>
            ))}
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 20,
        alignItems: 'center',
        gap: 20,
    },
    titulo: {
        color: "#FFF",
        fontFamily: "Montserrat_700Bold",
        fontSize: 24,
        textTransform: 'uppercase'
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
export default Treinos;