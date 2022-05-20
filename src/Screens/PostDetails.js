import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import React, { useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { Card, NativeBaseProvider } from "native-base";
const PostDetails = (props) => {
  const [share, setShare] = useState(0);
  // Constant value for fields
  const title = props.route.params.title;
  const image = props.route.params.urlToImage;
  const description = props.route.params.content;
  const author = props.route.params.author;
  const publishedAt = props.route.params.publishedAt;
  const url = props.route.params.url;
  //
  const incrementShare = () => {
    setShare(share + 1);
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${title} \n\n ${url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          incrementShare();
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Card>
          <Image
            source={{ uri: image }}
            style={{ height: 300, resizeMode: "cover", borderRadius: 10 }}
          />
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.author}> - {publishedAt}</Text>
          <Text style={styles.author}> - {author}</Text>
          <TouchableOpacity style={styles.sharebtn} onPress={onShare}>
            <View style={styles.shareicon}>
              <FontAwesome
                name="share"
                size={24}
                color="black"
                style={{ padding: 5 }}
              />
            </View>
            <View style={styles.shareTextView}>
              <Text style={styles.shareText}>Share</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text>{share}</Text>
          </View>
        </Card>
      </View>
    </NativeBaseProvider>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  description: {
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 17,
    textAlign: "justify",
  },
  author: {
    display: "flex",
    alignSelf: "flex-end",
    textAlign: "right",
    marginRight: 20,
    fontWeight: "bold",
  },
  share: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  sharebtn: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  shareText: {
    marginHorizontal: 10,
    fontSize: 20,
    padding: 2,
  },
  shareicon: {
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  shareTextView: {
    borderWidth: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
