import React, { useState, useEffect } from "react";
import * as Location from 'expo-location'
import { WEATHER_API } from '@env'


export const useGetWeather = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)


    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`
            )
            const data = await res.json()
            setWeather(data);
        } catch (e) {
            setError('Could not fetch weather')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }
            try {
                const location = await Location.getCurrentPositionAsync({});
                setLat(location.coords.latitude);
                setLon(location.coords.longitude);
                await fetchWeatherData();
            } catch (e) {
                setError(e.message);
            }
        })();
    }, [lat, lon]);

    return [loading, error, weather]
}