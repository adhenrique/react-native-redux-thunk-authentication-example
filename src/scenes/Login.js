import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LoginActions from './../actions/Login';

class Login extends Component {
    componentDidMount(){
        this.props.login('meulogin', 'minhasenha');
    }

    render(){
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
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={'senha'}
                        placeholderTextColor={'rgba(54, 173, 164, .2)'}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                    />
                </View>
                <Button
                    title={"Acessar"}
                    onPress={ () => {} }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.isLogged,
        hasError : state.hasError,
        isLoading: state.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(LoginActions.login(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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