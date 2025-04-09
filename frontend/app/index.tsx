import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1A1A1D", "#000000"]}
      style={style.container}
    >
      <Text style={style.text}>JessFit</Text>
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
  text: {
    fontFamily: "MontSerrat_700Bold",
    fontSize: 30,
    color: '#FFF',
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
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
  },
});