import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../Screens/HomeScreen";
import DrawerComponent from "../components/DrawerComponent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  drawerContent={  <DrawerComponent navigation={this.props.navigation}/>}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;