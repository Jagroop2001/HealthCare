import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import {View,Text, StyleSheet, Dimensions, ScrollView , Image} from "react-native";
import diseaseDetails from "../API/diseaseDetails";
import HeaderComponent from "../components/HeaderComponent";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class  DiseaseDetailsScreen extends React.Component {
    state={
        data : [],
    }
    
    componentDidMount () {
        for(let i=0;i<diseaseDetails.diseases.length;i++) {
        if(this.props.route.params.id === diseaseDetails.diseases[i].id){
            this.setState({data : diseaseDetails.diseases[i]})
        }
    }
    }

    
    render() {
       const {data} = this.state;
        return(
            
            <View style={styles.flex}>
                <HeaderComponent/>
                <ScrollView>
                <Image source={{uri : data.image}} style={styles.imageStyle}/>    
                <Text style={styles.headingText}>About {data.title}</Text>
                <Text style={styles.dataTextStyle}>{data.about}</Text>
                <Text style={styles.headingText}>Common Symptoms</Text>
                <Text style={styles.dataTextStyle}>{data.common_symptoms}</Text>
                <Text style={styles.headingText}>Mild Symptoms</Text>
                <Text style={styles.dataTextStyleCaptilize}>{data.moderate_symptoms}</Text>
                <Text style={styles.headingText}>Strong Symptoms</Text>
                <Text style={styles.dataTextStyleCaptilize}>{data.dangerous_symptoms}</Text>
                <Text style={styles.headingText}>Prevention and Precautions</Text>
                <Text style={styles.dataTextStyleCaptilize}>{data.preventions}</Text>
                <View style={{margin : 30}}/>
                
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  
    container:{
        flex:1,
    },
    headingText:{
        margin : windowHeight*0.02 ,
        fontSize : 25,
        fontWeight:"500",
        color :"darkblue"

    },
    dataTextStyle :{
        margin : windowHeight*0.01 ,
        fontSize : 18,
        color :"black" ,
        
    },
    dataTextStyleCaptilize :{
        margin : windowHeight*0.01 ,
        fontSize : 18,
        color :"black" ,
        textTransform:"capitalize"
    },
    imageStyle:{
        height : windowHeight*0.3,
        width:"96%",
        margin : 10,
        resizeMode:"stretch"
    }
})