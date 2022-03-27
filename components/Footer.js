import React,{useState} from "react";
import {View,Image,StyleSheet,Text, TouchableOpacity} from 'react-native'

export default class Footer extends React.Component{
      


   render(){
    return(
      

            <View style={styles.fotterContainer}>
         
            <TouchableOpacity
             onPress={()=> {
                this.props.navigation.navigate('HomeScreen')
            } }
            >
                <Image style={{height: 30 , width: 30 , marginTop:2, tintColor :"#00B0FF"}} source={require('../Images/clipboard.png')}></Image>
               
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> {
                this.props.navigation.navigate('Run')
            } }
            >
                <Image style={{height: 30 , width: 30 , tintColor :"#00B0FF", marginTop:2}} source={require('../Images/athletics.png')}></Image>
                
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={()=> {
                    this.props.navigation.navigate('Settings')
                } }
            >
                <Image  style={{height: 30 , width: 30 , tintColor :"#00B0FF", marginTop:2}} source={require('../Images/settings.png')}></Image>
               
            </TouchableOpacity>
       
        </View>
        )}
  
    
}

const styles=StyleSheet.create({
    fotterContainer:{
        height:50,
        flexDirection:"row",
        justifyContent:'space-around',
        backgroundColor:"white",
        padding:10
        //alignItems:'center',
        // alignSelf:"center
    },
    header_image:{
        alignSelf:"center",
        
    }
})