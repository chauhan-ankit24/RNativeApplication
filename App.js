import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <View style={styles.container}> 
          <CurrentWeather />
          {/* <UpcomingWeather /> */}
          {/* <City/>  */}
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;