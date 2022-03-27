import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import GetLocation from 'react-native-get-location';
import Footer from '../../components/Footer';
import Share from 'react-native-share';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  location: {
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    margin: 20,


  },
});

export default class Settings extends Component {
  state = {
    location: null,
    loading: false,
  };

  _requestLocation = (teste = '') => {
    this.setState({loading: true, location: null});

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        this.setState({
          location,
          loading: false,
        });
      })
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location: null,
          loading: false,
        });
      });
  };

  render() {
    const {location, loading} = this.state;
    return (
      <View style={styles.container}>
         <HeaderComponent name="Get Instant Help"/>
          <ScrollView>
        <Text style={styles.welcome}>Need Someone's Help ??</Text>
        <Text style={styles.instructions}>
          To get location, press the button:
        </Text>
        <View style={styles.button}>
          <Button
            disabled={loading}
            title="Get Location"
            onPress={this._requestLocation}
          />
        </View>
        {loading ? <ActivityIndicator /> : null}
        {location ? (
          <Text style={styles.location}>{JSON.stringify(location, 0, 2)}</Text>
        ) : null}
        <Text style={styles.instructions}>If somehow some eror occur press below button :</Text>
       
        <View style={styles.button}>
          <Button
            title="Open Gps Settings"
            onPress={() => {
              GetLocation.openGpsSettings();
            }}
          />
        </View>
        <TouchableOpacity
         onPress={() =>{
          Share.open(this.state.location)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
         }}
        >
        <View style={{height: 50 , width: 200 , backgroundColor:"#4C9CDF", justifyContent:"center", alignSelf:"center", marginTop:40, borderRadius: 10}}>
          <Text style={{alignSelf:"center" , color:"white", fontSize:20}}>Share Location</Text>
        </View>
       </TouchableOpacity>
       
</ScrollView>
<Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}