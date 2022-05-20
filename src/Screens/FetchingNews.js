import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Share,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Card, NativeBaseProvider } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const All = (props) => {
  const navigation = useNavigation();
  const categories = props.route.params.name;
  const date = new Date();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${catgories}&from=${date}&sortBy=publishedAt&apiKey=4bac383e252c4a859eec5a704e48a296`
    );
    const resData = await res.json();
    const finalData = resData.articles;
    setLoading(false);
    setData(finalData);
  };
  useEffect(() => {
    getData();
  }, []);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Hello",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <NativeBaseProvider>
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
                  <View style={styles.btn}>
                    <TouchableOpacity style={styles.save}>
                      <Fontisto name="favorite" size={24} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.share} onPress={onShare}>
                      <Fontisto name="share" size={24} color="green" />
                    </TouchableOpacity>
                  </View>
                </Card>
              </NativeBaseProvider>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default All;

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
    // margin: 20,
  },
  btn: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: -20,
  },
  save: {
    marginRight: 30,
  },
  share: {
    marginRight: 10,
  },
});
