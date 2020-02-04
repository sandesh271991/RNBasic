import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image, Button } from 'react-native';



class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HOme',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
            <Text>
                hometexts
            </Text>

                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigate('AboutScreen')}
                />
            </View>
        );
    }
}

export default HomeScreen