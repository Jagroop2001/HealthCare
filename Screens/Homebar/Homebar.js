import React from "react";
import {View, Text} from "react-native";
import Footer from "../../components/Footer";


export default class HomeBar extends React.Component {
    render() {
        return(
            <View>
            <View>
                <Text>Working HomeBar</Text>

            </View>
            <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}