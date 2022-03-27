import React from "react";
import {StyleSheet, View, Text , Image, TouchableOpacity} from "react-native";
import auth from '@react-native-firebase/auth';

HeaderComponent = ({name}) => {
    return(
        <View style ={styles.size}>
            <View style={{justifyContent:"space-around" , flexDirection:"row"}}>
         <Text style={{justifyContent:"center",alignSelf:"center", marginTop: 10, fontSize:24, color:"#4C9CDF", fontWeight:"500", marginLeft: 120}}>{name}</Text>
         <TouchableOpacity
         style={{marginTop: 12}}
         onPress={
             () => {
                auth()
                .signOut()
                .then(() => console.log('User signed out!'));
             }
         }
         >
         <Image source={require('../Images/turn-off.png')} style={{height: 30, width: 30 , alignSelf:"center" , marginLeft : 60, tintColor:"#4C9CDF"}}  />
         </TouchableOpacity>
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    size :{
        height : 55,
        backgroundColor:"white",
        elevation:1,
        flexDirection:"row"
    }

})

export default HeaderComponent;