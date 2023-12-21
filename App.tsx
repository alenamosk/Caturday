import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { Audio } from "expo-av";
import { CatBreed } from "./types";
import CatBreedsInfo from "./components/CatBreedsInfo";

export default function App() {
  const [catsBreeds, setCatsBreeds] = useState<CatBreed[]>([]);
  // const [sound, setSound] = useState<Audio.Sound | null>(null);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const catBreedData = await response.json();

      setCatsBreeds(catBreedData);
    };
    fetchData();
  }, []);

  // const playSound = async () => {
  //   try {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require("./assets/mixkit-sweet-kitty-meow-93.wav")
  //     );
  //     setSound(sound);
  //     await sound.playAsync();
  //     setCount((prevCount) => prevCount + 1);
  //   } catch (error) {
  //     console.error("Error playing sound:", error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Everyday is a Caturday</Text>
        {catsBreeds.map((catsBreed) => {
          return (
            <>
              {/* Extract this to separate component and add useState there and dont forget to import a sound */}
              <CatBreedsInfo catsBreed={catsBreed} />
              {/* <Button title="Like 💜" color="#f194ff" onPress={playSound} /> */}
            </>
          );
        })}
        {/* <StatusBar style="auto" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 30,
  },
  img: {
    width: 300,
    height: 300,
  },
  scrollView: {
    backgroundColor: "lightpurple",
  },
  catBreedCard: {
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    // padding: 10,
  },
  headerForABreed: {
    padding: 10,
  },
  description: {
    padding: 10,
  },
  imgContainer: {
    alignItems: "center",
  },
});
