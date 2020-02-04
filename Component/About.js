import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';




class About extends React.Component {
    static navigationOptions = {
        title: 'ABout',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                    {this.props.navigation.getParam('dataSend')}
            </Text>
                <Button
                    title="Go to back to home Screen"
                    onPress={() => this.props.navigation.goBack()}>
                    Navigate
                    </Button> 
            </View>
        );
    }
}

export default About