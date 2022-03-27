import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiseaseDetailsScreen from "../Screens/DiseaseDetailsScreen";
import Run from "../Screens/RunningScreens/Run";
import HomeScreen from "../Screens/HomeScreen";
import Footer from "../components/Footer";
import HomeBar from "../Screens/Homebar/Homebar";
import Settings from "../Screens/Settings/Settings";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    tabBar={() => {
      <Footer navigation={this.props.navigation}/>
  }}

  >
     
      <Tab.Screen name="HomeScreen" component={HomeScreen}  />
      <Tab.Screen name="Run" component={Run} /> 
      <Tab.Screen name="Settings" component={Settings} /> 
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;