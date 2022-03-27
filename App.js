import React from "react";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./Navigation/navigation";

 const App = () => {
  return (
    <NavigationContainer>
      
     <MainStackNavigator/>
    </NavigationContainer>
  );
}
export default App;