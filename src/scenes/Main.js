import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class Main extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Essa é a página principal</Text>
                <Button
                    onPress={ () => {} }
                    title={"Sair"}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    input: {
        marginBottom: 10,
        borderBottomColor: '#36ada4',
        borderBottomWidth: 1
    },

    button: {
        padding: 10,
        backgroundColor: '#36ada4'
    }
});
