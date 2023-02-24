import Header from "components/home/Header"
import { StyleSheet, SafeAreaView } from "react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
})
