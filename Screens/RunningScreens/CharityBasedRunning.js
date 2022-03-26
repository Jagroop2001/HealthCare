import React from 'react';
import {View , Text, StyleSheet , ScrollView , Image} from 'react-native';

import {CHARITY_RUN, WORKS, WORKS_2 , LIST} from '../../assets/constants';

export default class CharityBasedRunning extends React.Component {

    render() {
        return(
            <View style={style.container}>
                <ScrollView>
                <Text style={style.headingText}>What is Charity based Running ?</Text>
                <Text style={style.text}>{CHARITY_RUN}</Text>
                <Text style={style.headingText}>How it Works ?</Text>
                <Text style={style.text}>{WORKS}</Text>
                <Image  source={require('../../Images/charity-running.jpg')} style={style.image}/>
                <Text style={style.text}>{WORKS_2}</Text>
                <Text style={style.headingText}>Why Should you go for it ?</Text>
                 {LIST.map((data) => (
                     
                        <View style={{flexDirection: 'row', marginRight: 10}}>
                        <Text style={style.text}>{'\u2022'}</Text>
                        <Text style={style.text}>{data.value}</Text>
                      </View>
                     
                 ))}
                 </ScrollView>
            </View>
        );
    }
}


const style = StyleSheet.create({

    container:{
        flex:1,
    },
    headingText:{
        fontSize : 24,
        margin:10,
        color:"#2ECC71",
        fontWeight:"500"
    },
    text:{
        fontSize : 20,
        margin:5,
        color:"#5F6A6A",
      
        
    },
    image:{
        height : 200,
        width:376,
        margin: 10,
        borderRadius:10,

    }
})