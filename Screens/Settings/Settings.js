import React from "react";
import {View, Text} from "react-native";
import Footer from "../../components/Footer";


export default class Settings extends React.Component {
    render() {
        return(
            <View>
            <View>
                <Text>Working Settings</Text>

            </View>
            <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}