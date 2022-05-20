import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import CustomDrawer from "../../CustomDrawer";
import Logo from "../../../Logo";
import All from "../../../Screens/FetchingNews";
import Home from "../../../Screens/Home";
import Page2 from "../../../Screens/Pages/Page2";
import PostDetails from "../../../Screens/PostDetails";
import Search from "../../../Screens/Pages/Search";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#f6ff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Logo />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <AntDesign name="menu-fold" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="All"
        component={All}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({ route }) => ({ title: route.params })}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: { marginLeft: -20 },
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={AuthStack}
          options={{
            drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Page2}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Message"
          component={Page2}
          options={{
            drawerIcon: () => (
              <AntDesign name="message1" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Moment"
          component={Page2}
          options={{
            drawerIcon: () => (
              <Ionicons name="timer-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Page2}
          options={{
            drawerIcon: () => (
              <Feather name="settings" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
