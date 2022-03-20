import React from "react";
import {View , Text, StyleSheet, Dimensions, ScrollView , Image} from 'react-native';
import { MARATHON } from "../../assets/constants";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Marathons extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                {
                    MARATHON.map ((data) => {
                        return(
               <View style={styles.card}>
                   <Image  source={{uri : data.value}} style={styles.imageStyle}/>
                   <View  style={{flexDirection:"row"}}>
                       <Text style={styles.textStyle}>Price : ₹ 200</Text>
                       <Text style={styles.textStyle}>Location : India</Text>
                   </View>

               </View>
                        )
               })
    }
    </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    card:{
        height : windowHeight*0.26,
        width : "95%",
        margin:10,
        marginTop : 40,
        borderRadius : 20,
        borderWidth:1,
        borderColor :"#B0B2B5",
    },
    imageStyle:{
        height : windowHeight*0.2,
        width: "100%",
        resizeMode:"stretch",
        borderRadius: 10
    },
    textStyle:{
        marginLeft: 25,
        padding: 10,
        fontSize:20,
        color:"#5F6A6A"
    }

})