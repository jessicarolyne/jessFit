import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';
import exerciciosData from '../data/listaExercicios.json';
// import FastImage from 'react-native-fast-image';

const Exercicios = () => {
    console.log(exerciciosData);
    return (
        <LinearGradient
            colors={["#021123", "#021123"]}
            style={style.container}
        >
            <Text style={style.titulo}>Seus treinos</Text>
            {exerciciosData.map(exercicio => (
                <View style={style.card}>
                    <Text style={style.textCard}>{exercicio.nome}</Text>
                    <Image style={style.imagem} source={{ uri: exercicio.imagem }} />
                    {/* <FastImage
                        style={style.imagem}
                        source={{uri: exercicio.imagem}}
                        resizeMode={FastImage.resizeMode.contain}
                    /> */}
                </View>
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
    imagem: {
        objectFit: "contain",
        width: 250,
        height: 250
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
export default Exercicios;