/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TextInput,
    Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
            <Text>Esta é a pagina de login</Text>
            <View>
                <TextInput
                    placeholder={'usuario'}
                    placeholderTextColor={'rgba(54, 173, 164, .2)'}
                    returnKeyType={'next'}
                    autoCapitalize={'none'}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(user) => {}}
                />
                <TextInput
                    placeholder={'senha'}
                    placeholderTextColor={'rgba(54, 173, 164, .2)'}
                    returnKeyType={'next'}
                    autoCapitalize={'none'}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(pass) => {}}
                />
            </View>
            <Button
                title={"Acessar"}
                onPress={ () => {} }
            />
        </View>
    );
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
