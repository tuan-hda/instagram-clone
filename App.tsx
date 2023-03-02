import { useFonts } from "expo-font"
import HomeScreen from "./screens/HomeScreen"

export default function App() {
  const [loaded] = useFonts({
    "SF-Pro-Display-Black": require("assets/fonts/SF-Pro-Display-Black.otf"),
    "SF-Pro-Display-Bold": require("assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-Light": require("assets/fonts/SF-Pro-Display-Light.otf"),
    "SF-Pro-Display-Medium": require("assets/fonts/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Display-Semibold": require("assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SF-Pro-Display-Regular": require("assets/fonts/SF-Pro-Display-Regular.otf"),
  })

  if (!loaded) return null

  return <HomeScreen />
}
