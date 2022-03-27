
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
import Run from "../Screens/RunningScreens/Run";
import CharityBasedRunning from "../Screens/RunningScreens/CharityBasedRunning";
import BMI from "../Screens/RunningScreens/BMI";
import Running from "../Screens/RunningScreens/Running";
import Marathons from "../Screens/RunningScreens/Marathons";
import BottomTabNavigator from "./TabNavigator";
import HomeBar from "../Screens/Homebar/Homebar";
import Settings from "../Screens/Settings/Settings";
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
      <Stack.Screen name="BottomNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="HomeBar" component={HomeBar} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DiseaseDetailsScreen" component={DiseaseDetailsScreen} />
      <Stack.Screen name="Run" component={Run} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="CharityBasedRunning" component={CharityBasedRunning} />
      <Stack.Screen name="BMI" component={BMI} />
      <Stack.Screen name="Running" component={Running} />
      <Stack.Screen name="Marathons" component={Marathons} />



    </Stack.Navigator>
  );
}

export  { MainStackNavigator };