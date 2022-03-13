import React,{useState} from "react";
import { View, Button, Text, StyleSheet , Dimensions , ScrollView , Image, TouchableOpacity} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import diseaseData from "../API/diseaseData";
import { TextInput } from "react-native-gesture-handler";


export default class HomeScreen  extends React.Component  {
  state={
    text:"",
  }

  handleEmail = (text) =>{
      this.setState({text : text})
  }
  render() {
    const {text} = this.state;
    const filterValue = diseaseData.diseases.filter( diseases => diseases.title.toLowerCase().includes(text.toLowerCase()));

  return (
    <View  style={styles.container}>
      <HeaderComponent/>
      <ScrollView>
        <View style={styles.searchBox}>
          <TextInput
    
           placeholder="Search Disease Here .."
           style={{marginLeft : 10}}
           onChangeText = {this.handleEmail}
          />
          <Image source={require('../Images/search.png')} style={{height : 25 ,width:25 , alignSelf:"center" , tintColor:"skyblue",marginLeft:windowHeight*0.2}} />
        </View>
    {

      filterValue.map((data) =>{
        return(
          <TouchableOpacity
           onPress={()=>{this.props.navigation.navigate("DiseaseDetailsScreen")}}
          >
       <View style={styles.cardStyle}>
         
         <Image source={{uri : data.image}} style={styles.imageStyle} />
         <Text style={styles.textStyle}>{data.title}</Text>
         
       </View>
       </TouchableOpacity>
        );
      })
      
    } 
    </ScrollView>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor:"#F4F4F4"
  },
  cardStyle:{
    height : windowHeight*0.28,
    width : "90%" ,
    marginLeft : 20,
    marginBottom : 15,
    borderRadius :20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    opacity:5,
    borderWidth:1,
    borderRightWidth:1,
    borderColor :"#DADADA",
    backgroundColor :"white",
    padding:5
   
  },
  imageStyle:{
    height: windowHeight*0.24,
    resizeMode:"stretch",
    borderRadius : 20
  },
  textStyle:{
    alignSelf :"center",
    paddingBottom:2,
    fontSize : 20,
    fontWeight:"500",
    color:"black"
  },
  searchBox :{
    height : windowHeight*0.06,
    width:"91%",
    margin:15,
    borderRadius:20,
    borderWidth:1,
    borderColor:"#DADADA",
    backgroundColor:"white",
    flexDirection:"row"
  }
})

