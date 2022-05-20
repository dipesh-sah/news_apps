import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import categories from "./Categories";
import Trending from "./Trending";
import { Ionicons } from "@expo/vector-icons";
import { Divider, Input, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const searchdata = () => {
    if (search === "") {
      alert("Enter the search keyword");
    } else {
      navigation.navigate("Search", search);
    }
  };
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <NativeBaseProvider>
          <Input
            placeholder="Search Here"
            style={styles.search}
            margin={2}
            value={search}
            onChangeText={(text) => setSearch(text)}
            paddingX={2}
            InputRightElement={
              <TouchableOpacity>
                <Ionicons
                  name="ios-search"
                  size={30}
                  color="black"
                  onPress={searchdata}
                  style={{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            }
          />
        </NativeBaseProvider>
      </View>
      <ScrollView>
        <Text style={styles.headerText}>Categories</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categories}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.categories}
                onPress={() => navigation.navigate("All", item)}
              >
                <ImageBackground
                  style={styles.image}
                  source={{ uri: item.image }}
                  imageStyle={{ borderRadius: 7 }}
                ></ImageBackground>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <NativeBaseProvider>
          <Divider />
        </NativeBaseProvider>
        <Trending />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  categories: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: 110,
  },
  image: {
    height: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  search: {
    padding: 10,
    margin: 2,
    borderRadius: 5,
  },
});
