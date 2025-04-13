import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#021123", "#021123"]}
      style={style.container}
    >
      <Text style={style.subtitulo}>Welcome to</Text>
      <Text style={style.text}>JessFit</Text>
      <Image style={style.imagem} source={require('../assets/images/musculacao.png')} />
      <TouchableOpacity onPress={() => {
        router.push('/treinos')
      }} style={style.button}>
        <Text style={style.buttonTitle}>Entrar</Text>
        <MaterialIcon name="arrow-forward" size={24} color={"#01080E"} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  subtitulo: {
    fontFamily: "Montserrat_700Bold",
    fontSize:15,
    color: '#98A0AB',
  },
  text: {
    fontFamily: "MontSerrat_700Bold",
    fontSize: 30,
    color: '#FFF',
  },
  imagem: {
    objectFit: "contain",
    width: 250,
    height: 250
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#98A0AB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    flexDirection: "row", 
    gap: '5px',
  },
  buttonTitle: {
    color: "#01080E",
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 5
  },
});