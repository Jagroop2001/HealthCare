import React from "react";
import {View  , Text , StyleSheet , Image , Dimensions} from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SuccessfullyRegister extends React.Component {
         
 render(){
        return(
            <View style={styles.container}>
            <View style ={styles.imageContainer}>
                
      <Image
      source={require('../../Images/Relax.png')}
     style={{width: '90%',height :windowHeight*0.6, resizeMode: 'contain'}}
       />
      
    
    <Text style={styles.bigText}>You have Successfully Registered !!</Text>
    <TouchableOpacity
    onPress={()=>{this.props.navigation.navigate("Login")}}
    >
        <Text style={styles.SmallText}>Login Here</Text>
    </TouchableOpacity>
   </View>
    </View>
     )
}
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:"white",
    },
    imageContainer:{
        
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            alignItems :"center"
    },

 bigText:{
     fontSize : 20,
     color:"#00B0FF",
     fontWeight :"700"
 },
 SmallText:{
    fontSize : 25,
    color:"#5d3e68",
    fontWeight :"700",
    marginTop:20
}
});