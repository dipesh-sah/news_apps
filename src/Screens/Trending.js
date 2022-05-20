import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Divider, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
const Trending = () => {
  const navigation = useNavigation();
  const date = new Date();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      `https://627604d515458100a6aa1bf5.mockapi.io/api/v1/al`
    );
    const resData = await res.json();
    const finalData = resData;
    setLoading(false);
    setData(finalData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <NativeBaseProvider>
          <Text style={styles.headerText}>Trending News</Text>
          <Divider
            marginBottom={2}
            marginTop={-2.5}
            thickness={5}
            borderRadius={10}
            w={125}
            color="red.200"
            my="2"
            _light={{
              bg: "red.400",
            }}
          />
        </NativeBaseProvider>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <NativeBaseProvider>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Card>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("PostDetails", item)}
                    >
                      <View style={styles.views}>
                        <Image
                          source={{ uri: item.urlToImage }}
                          style={{
                            width: 100,
                            height: 100,
                            resizeMode: "cover",
                            aspectRatio: 1,
                            borderRadius: 5,
                          }}
                        />
                        <Text style={styles.titleText}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </Card>
                )}
              />
            </NativeBaseProvider>
          </View>
        )}
      </View>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    aspectRatio: 1,
    borderRadius: 15,
  },
  titleText: {
    fontWeight: "bold",
    paddingRight: 100,
    marginHorizontal: 15,
  },
  views: {
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 20,
    color: "red",
  },
});
