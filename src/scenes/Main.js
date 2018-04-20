import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class Main extends Component {
    render(){
        return(
            <View>
                <Text>Essa é a página principal</Text>
                <Button
                    onPress={ () => {} }
                    title={"Sair"}
                />
            </View>
        )
    }
}