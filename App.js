import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image,  } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DisplayComp from './Component/Display';

import HomeCompo from './Component/Home';

import AboutCompo from './Component/About'


class App extends React.Component {

    static navigationOptions = {
        title: 'Homes',
    };


        state = {

            fname: "nsmae",
            sname: "",
            result: "loading"
            
        }
        
        
        componentDidMount() {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(data=>data.json())
            .then(data2=> {
                console.log(data2)
                this.setState({
                    text: data2[0].name
                })
            })
        }

        handlest(firstName){ 

            this.setState ({ text: firstName }) 
        }

        submit() {
            this.setState({
                result: "change"
            })
        }

        render() {
            console.log("from render")
            const { navigate } = this.props.navigation;

            return (
          
                <View style={styles.container}>

                    <Appbar.Header>
                        <Appbar.BackAction
                            onPress={this._goBack}
                        />
                        <Appbar.Content
                            title="Title"
                            subtitle="Subtitle"
                        />
                        <Appbar.Action icon="magnify" onPress={() => navigate('AboutScreen')} />
                        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
                    </Appbar.Header>

                    <TextInput
                        label='fname'
                        value={this.state.fname}
                        placeHolder= "enter fname"
                        onChangeText={text => this.setState({ fname: text })}
                        style={{ margin: 10 }}
                    />
                    <TextInput
                        label='sname'
                        value={this.state.sname}
                        onChangeText={text => this.setState({ sname })}
                        style={{ margin: 10 }}
                    />

                    <Button icon="camera" mode="contained" onPress={this.submit.bind(this)} style={{ margin: 10 }}>
                        Press me
                    </Button>
                    <Button
                        title= "Go to About Screen"
                        onPress={() => navigate('AboutScreen', {dataSend: 'Hi Sandesh'})}>
                        Navigate
                    </Button>    
    
                    <DisplayComp datapass={this.state.result} />
               
          
                    <Text>
                        {this.state.fname}
                    </Text>


                    <Button title="Sandesh" onPress={() => Alert.alert("alert clicked")} style={{ margin: 10 }} />
                    
              
                    <ScrollView>
                        <Image source= {{uri:"https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg", height:80, width: 80}} />
                    </ScrollView>
                    

                </View>
            );
        }
        }
       


const MainNavigator = createStackNavigator({
    HomeScreen: { screen: App },
    AboutScreen: { screen: AboutCompo },
},
    {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: 'blue',
            },
        }
    }

);


const NavigationApp = createAppContainer(MainNavigator);


export default NavigationApp


const styles = StyleSheet.create({
    container: {
    flex: 1,
        backgroundColor: 'red',
    },
});
