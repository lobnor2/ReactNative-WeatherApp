import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [data, setData] = useState({
    current: {
      cloud: 25,
      condition: {
        code: 1003,
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        text: "Partly cloudy",
      },
      feelslike_c: 17,
      feelslike_f: 62.6,
      gust_kph: 12.6,
      gust_mph: 7.8,
      humidity: 83,
      is_day: 1,
      last_updated: "2023-08-15 09:45",
      last_updated_epoch: 1692089100,
      precip_in: 0,
      precip_mm: 0,
      pressure_in: 30,
      pressure_mb: 1016,
      temp_c: 17,
      temp_f: 62.6,
      uv: 5,
      vis_km: 10,
      vis_miles: 6,
      wind_degree: 270,
      wind_dir: "W",
      wind_kph: 11.2,
      wind_mph: 6.9,
    },
    location: {
      country: "United Kingdom",
      lat: 51.52,
      localtime: "2023-08-15 10:01",
      localtime_epoch: 1692090090,
      lon: -0.11,
      name: "London",
      region: "City of London, Greater London",
      tz_id: "Europe/London",
    },
  });
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(
  //     "http://api.weatherapi.com/v1/current.json?key=196f09519ad548f6a6120000230108&q=London"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const icon = "https:" + data.current.condition.icon;

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 100 }}>{data.current.cloud} Deg C</Text>
      <Image source={{ uri: icon }} style={{ height: 100, width: 100 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
