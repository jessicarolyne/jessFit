import { Stack } from "expo-router";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold
  });

  if (!loaded) {
    return null;
  }

  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="treinos" options={{ headerShown: false }} />
    <Stack.Screen name="exercicios" options={{ headerShown: false }} />
  </Stack>;
}