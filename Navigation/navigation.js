
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Screens/SplashScreen";
import HomeScreen from "../Screens/HomeScreen";
import IsRegistered from "../Screens/Registration/IsRegister";
import RegisterUser from "../Screens/Registration/RegisterUser";
import Login from "../Screens/Login";
import SuccessfullyRegister from "../Screens/Registration/SuccessfulRegister";
import DrawerComponent from "../components/DrawerComponent";
import DrawerNavigator from "./DrawerNavigation";
import DiseaseDetailsScreen from "../Screens/DiseaseDetailsScreen";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}
    >
      
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="IsRegistered" component={IsRegistered} />
      <Stack.Screen name="RegisterUser" component={RegisterUser} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SuccessfulRegister" component={SuccessfullyRegister} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DiseaseDetailsScreen" component={DiseaseDetailsScreen} />
    </Stack.Navigator>
  );
}

export  { MainStackNavigator };