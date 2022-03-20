import React from 'react';
import {View, Text, StyleSheet , Dimensions, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Run extends React.Component {

    navigationToOther =(screenName) => {
       this.props.navigation.navigate(screenName);
    }
    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                     onPress={() => this.navigationToOther('Running')}
                    >
                <View style={styles.card}>
                       <Image  source={require('../../Images/running.png')} style={styles.imageStyle}/>
                       <Text style={styles.textStyle}>Start your Jogging</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => this.navigationToOther('Marathons')}
                >
                <View style={styles.card}>
                       <Image  source={require('../../Images/planner.png')} style={styles.imageStyle}/>
                       <Text style={styles.textStyle}>Live Marathons</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => this.navigationToOther('BMI')}
                >
                <View style={styles.card}>
                       <Image  source={require('../../Images/bmi.png')} style={styles.imageStyle}/>
                       <Text style={styles.textStyle}>Check Your BMI</Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity
                 onPress={() => this.navigationToOther('CharityBasedRunning')}
                >
                <View style={styles.card}>
                       <Image  source={require('../../Images/know-how.png')} style={styles.imageStyle}/>
                       <Text style={styles.textStyle}>How it Wroks</Text>
                </View>
                </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white"
    },

    card:{
        height : windowHeight*0.2,
        width : "95%",
        margin:10,
        marginTop : 40,
        borderRadius : 20,
        borderWidth:1,
        borderColor :"#B0B2B5",
        flexDirection:"row"
    
    },
    imageStyle:{
        height : windowHeight*0.18,
        width: windowWidth*0.35,
        alignSelf:"center",
        marginLeft : 20
    },
    textStyle:{
        alignSelf:"center",
        marginLeft : 15,
        fontSize:22,
        fontWeight:"500"
    }

});