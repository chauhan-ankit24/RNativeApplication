import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs"

const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaProvider> */}
      <Tabs />
      {/* </SafeAreaProvider> */}
    </NavigationContainer >
  )
}

export default App;