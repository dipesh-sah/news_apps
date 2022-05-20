import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Divider, NativeBaseProvider } from "native-base";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
//
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200b6" }}
      >
        <ImageBackground
          source={require("../../assets/background.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../../assets/avtar.jpg")}
            style={{
              width: 90,
              height: 90,
              borderRadius: 70,
            }}
          />
          <Text
            style={{
              color: "white",
              marginVertical: 10,
              marginHorizontal: 5,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            John Doe
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <NativeBaseProvider>
          <Divider thickness={4} marginTop={-5} />
        </NativeBaseProvider>
        <TouchableOpacity style={styles.button}>
          <FontAwesome5 name="share-square" size={24} color="black" />
          <Text style={styles.Text}>Share With Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons
            name="logout"
            size={24}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.Text}>SignOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  Text: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});
