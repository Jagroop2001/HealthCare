import React, { useEffect, useState } from 'react';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import { SafeAreaView, StyleSheet, Text, View , Dimensions, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Running = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const config = {
      default_threshold: 15.0,
      default_delay: 150000000,
      cheatInterval: 3000,
      onStepCountChange: (stepCount) => { setSteps(stepCount) },
      onCheat: () => { console.log("User is Cheating") }
    }
    startCounter(config);
    return () => { stopCounter() }
  }, []);

  return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.textHead}>Enter Your Today's Goal of Running </Text>
        <View style={styles.inputBox}>
          <TextInput  placeholder='Route in KM Only' style={{marginLeft: 10}}/>
          </View>
          <Text style={styles.textHead}>Today's  Progress</Text>
          <View style={styles.bigBox}>
            </View>
            <Text style={styles.textHead}>Progress Report :</Text>
          <View style={styles.bigBox}>
            </View>

            <Text style={styles.textHead}>Your Charity Coins :</Text>
          <View style={styles.bigBox}>
            </View>

            </ScrollView>
      </View>
  
  );
};

const styles = StyleSheet.create({
  container:{
     flex: 1,
     backgroundColor :"white"
  },
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  step: {
    fontSize: 36
  },
  inputBox :{
    height: windowHeight*0.07,
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor :"#5F6A6A"
  },
  textHead: {
    margin: 20,
    marginBottom: 2,
    fontSize: 22,
    color: "#00B0FF",
    fontWeight:"500"
  },
  bigBox:{
    height: windowHeight*0.3,
    margin: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor :"#00B0FF",
    
  }
});

export default Running;

 {/* <View style={styles.screen}>
        <Text style={styles.step}>{steps}</Text>
      </View> */}