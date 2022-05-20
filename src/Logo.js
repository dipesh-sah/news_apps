import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View>
      <View>
        <Image
          source={require("../assets/kantipur-logo1.png")}
          resizeMode="contain"
          style={{ width: 218, height: 40 }}
        />
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
