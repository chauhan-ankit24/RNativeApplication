import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs"
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";
const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      < NavigationContainer >
        {/* <SafeAreaProvider> */}
        < Tabs weather={weather} />
        {/* </SafeAreaProvider> */}
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (<ActivityIndicator size={'large'} color={'blue'} />)}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;