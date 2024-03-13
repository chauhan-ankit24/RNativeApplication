import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <CurrentWeather /> */}
        <UpcomingWeather />
      </View>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;