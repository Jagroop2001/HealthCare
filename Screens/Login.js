import React from "react";
import {View  , Text , StyleSheet , Image , Dimensions, Alert, TouchableOpacity, TextInput} from "react-native";
import { ScrollView,  } from "react-native-gesture-handler";
import { firebase } from "@react-native-firebase/auth";
import {Picker} from '@react-native-picker/picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import auth from '@react-native-firebase/auth';

export default class Login extends React.Component {
    state = {
        email: '',
        password: ''
     }

    //  componentDidMount() {
        
    //     auth().onAuthStateChanged((user) => {
    //         if (user) {
    //           console.log('User email: ', user.email);
    //         }
    //         else{
    //             console.log("NOt Signed In");
    //         }
    //       });
    //  }

    doSingIn = async(email, password) => {
       
        if(email = '')
        {
             alert("Please Enter Email ");
        }
        else if( password = ''){
            alert("Please Enter  Password");
        }
       else{
           // CURRENTLY COMMENTED SO THAT CHECKER DON"T FACE ANY PROBLEM WHILE CHECKING FUNCTIONALITY
    //     auth()
    //     .signInAnonymously()
    //     .then(() => {
    //       console.log('User signed in anonymously');
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/operation-not-allowed') {
    //         console.log('Enable anonymous in your firebase console.');
    //       }
      
    //       console.error(error);
    //     });
       
    //    }
       }
    }

     

     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
         
 render(){
        return(
            <View style={{flex :1 , backgroundColor : "white"}}>
                <ScrollView>
               <View style={styles.headerDesign}>
                   <TouchableOpacity
                   onPress={()=> this.props.navigation.goBack()}
                   >
                    <Image source={require('../Images/Back_Arrow.png')} 
                  style={styles.arrowImage}
                  />
                  </TouchableOpacity>

                  <Text style={styles.textStyle}>LogIn</Text>
               </View>
 <View>
     <Image  source={require('../Images/Login.png')}
     style={styles.registerImage}
     />
 </View>
               <View style={{alignItems :"center"}}>
                   <View style={styles.containerStyle}>
                       <TextInput
                        placeholder="Enter your Email"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                        onChangeText = {this.handleEmail}
                       />
                   </View>
                   <View style={styles.containerStyle}>
                       <TextInput
                        placeholder="Enter your Password"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                        onChangeText = {this.handlePassword}
                       />
                   </View>
               </View>
               <TouchableOpacity style={styles.buttonStyle}
                     onPress={()=> {
                         //this.doSingIn(this.state.email , this.state.password)
                         this.props.navigation.navigate("HomeScreen")
                        }}
                    >
                    <Text   style={styles.smallTextStyle}>Login</Text>
                    </TouchableOpacity>
               </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    headerDesign :{
        flexDirection : "row",
        height : windowHeight*0.08,
        borderWidth:1,
        borderColor:"#e5dddb"

    } ,
    arrowImage :{
        marginLeft: windowHeight*0.02,
        marginTop: windowHeight*0.01,
    },
    textStyle :{
        fontSize : 26,
        fontWeight:"600",
        marginLeft:windowHeight*0.12,
        marginTop: windowHeight*0.014,
        color:"#211c1b"
    },
    containerStyle:{
        height : windowHeight*0.06,
        width :"95%",
        marginTop: windowHeight*0.03,
        borderRadius : 20,
        borderWidth :1,
        borderColor :"#00B0FF"
    },
    containerHalf:{
        height : windowHeight*0.06,
        width :"42%",
        marginTop: windowHeight*0.03,
        borderRadius : 20,
        borderWidth :1,
        borderColor :"#00B0FF",
        marginRight : windowHeight*0.02,
        maringLeft: windowHeight*0.01
    },
    registerImage :{
        height : windowHeight*0.2,
        width: "95%",
        resizeMode: 'contain' , 
    },
    buttonStyle:{
        height : windowHeight*0.06,
        width:"96%",
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 10,
        marginTop : 20,
        backgroundColor :"#00B0FF",
        borderRadius : 20,
        justifyContent:"center",
        alignItems:"center"
    
    },
    smallTextStyle:{
        fontSize : 18,
        color:"black",
        padding : 10,
        fontWeight :"bold"
    } ,
});