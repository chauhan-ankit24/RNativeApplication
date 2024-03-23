import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as Location from 'expo-location'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs"
import { WEATHER_API } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  // console.log(WEATHER_API)

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API}`
      )
      const data = await res.json()
      setWeather(data);
    } catch (error) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false);
    }
    console.log(`error is : ${error}`);
  }
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        console.log(error)
        return;
      }
      try {
        const location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        await fetchWeatherData();
        console.log('data is');
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [lat, lon]);

  if (lat)
    console.log(lon)

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return (
    < NavigationContainer >
      {/* <SafeAreaProvider> */}
      < Tabs />
      {/* </SafeAreaProvider> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;