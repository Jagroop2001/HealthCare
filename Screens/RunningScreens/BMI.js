import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";

export default class App extends React.Component {
  state = {
    height: 0,
    mass: 0,
    resultNumber: 0,
    resultText: ""
  };

  handleCalculate = () => {
    let imc = (this.state.mass * 703) / this.state.height ** 2;
    this.setState({
      resultNumber: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultText: "Underweight" });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultText: "Normal Weight" });
    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultText: "Overweight" });
    } 
    else if(imc == undefined) {
    }else {
      this.setState({ resultText: "Please Input Correct Data" });
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../../Images/BGI.png")}
        style={{ position: 'absolute',
        left: 0,
        top: 0,height: "100%",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      >
        <View style={styles.container}>
          <Text
            style={{
              
              color: "red",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 30,
              fontSize: 30
            }}
          >
            BMI Calculator
          </Text>
          <View style={styles.intro}>
            <TextInput
              placeholder="Height"
              placeholderTextColor="orange"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={height => {
                this.setState({ height });
              }}
            />
            <TextInput
              placeholder="Mass"
              placeholderTextColor="orange"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={mass => {
                this.setState({ mass });
              }}
            />
          </View>

          <TouchableOpacity
            
            onPress={this.handleCalculate}
          >
            <Text style={styles.buttonText}>Calculate </Text>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>
            {this.state.resultText}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#f5fcff"
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 30,
    marginTop: 24,
    color: "#FFCB1F",

  },
 
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#FFCB1F",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 65,
    padding: 15
  }
});