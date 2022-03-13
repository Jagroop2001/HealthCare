import React from "react";
import { View , Text , Image , StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import Colors from "../assets/colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DrawerComponent  = () => {
    return(
        <View style={{flexDirection :"row"}}>
            <TouchableOpacity>
            <Image source={require('../Images/menu.png')}  style={style.imageStyle}/>
            </TouchableOpacity>
            <Text style={style.textStyle}>Fitbit Coach</Text>
        </View>
    );
}

export default DrawerComponent;

const style = StyleSheet.create({
       
    imageStyle:{
        height : windowHeight*0.04,
        width : windowWidth*0.09,
        margin : windowHeight*0.025
    },
    textStyle:{
        alignSelf :"center",
        fontSize: 32,
        color : Colors.darkBlue,
        marginLeft : windowWidth*0.1,
        fontWeight :"500"

    }
 
})