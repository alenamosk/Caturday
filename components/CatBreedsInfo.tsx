import { CatBreed } from "../types";
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
import { useState } from "react";

const CatBreedsInfo = ({ catsBreed }: { catsBreed: CatBreed }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [count, setCount] = useState(0);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/mixkit-sweet-kitty-meow-93.wav")
      );
      setSound(sound);
      await sound.playAsync();
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };
  return (
    <View style={styles.catBreedCard}>
      <View style={styles.headerForABreed}>
        <Text>🪩 {catsBreed.name}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `https://cdn2.thecatapi.com/images/${catsBreed.reference_image_id}.jpg`,
          }}
        />
      </View>

      <View style={styles.description}>
        <Text>Description: {catsBreed.description}</Text>
      </View>
      <View style={styles.likes}>
        <Text> {count} like(s)</Text>
      </View>
      <View style={styles.button}>
        <Button title="Like 💜" color="#f194ff" onPress={playSound} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    marginTop: 30,
  },
  img: {
    width: 355,
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
    // alignItems: "center",
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
  likes: {
    paddingLeft: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 90,
    margin: 10,
  },
});

export default CatBreedsInfo;
