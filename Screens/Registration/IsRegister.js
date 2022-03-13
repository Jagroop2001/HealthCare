import React from "react";
import { View, Button, Text, StyleSheet, Image , Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class IsRegistered extends React.Component {

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image source={require('../../Images/Run.png')}
                     style={styles.imageStyle}
                    />
                    <Text style={styles.textStyle}>Welcome</Text>
                    <View style={{marginTop : windowHeight*0.15}}>
                    <Text style={styles.smallTextStyle}>If you already have an account then please click</Text>
                    <TouchableOpacity style={styles.buttonStyle}
                     onPress={()=> this.props.navigation.navigate("Login")}
                    >
                    <Text   style={styles.smallTextStyle}>LogIn</Text>
                    </TouchableOpacity>
                    <Text style={styles.smallTextStyle}>If you are new user please click</Text>
                    <TouchableOpacity style={styles.buttonStyle}
                     onPress={()=> this.props.navigation.navigate("RegisterUser")}
                    >
                    <Text   style={styles.smallTextStyle}>Register</Text>
                    </TouchableOpacity>
                </View>

                </View>
               
            </View>
        );
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
    imageStyle:{
        resizeMode: 'contain' , 
        height :windowHeight*0.34 , 
        width :"90%" , 
        margin :  windowHeight*0.03
    },
    textStyle:{
        fontSize : 40,
        color :"#00B0FF",
        fontWeight:"700"
        
    },
    smallTextStyle:{
        fontSize : 18,
        color:"black",
        padding : 10,
        fontWeight :"bold"
    } ,
    buttonStyle:{
        height : windowHeight*0.06,
        width:"96%",
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 10,
        backgroundColor :"#00B0FF",
        borderRadius : 20,
        justifyContent:"center",
        alignItems:"center"
    
    }
})