import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
// import exercicioData from '../data/exercicio.json';
import { router } from 'expo-router';

const Exercicio = () => {
    return (
        <LinearGradient
            colors={["#021123", "#021123"]}
            style={style.container}
        >
                <View style={style.card}>
                    
                </View>
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
export default Exercicio;