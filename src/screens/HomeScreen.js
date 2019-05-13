import React from 'react';
import { StyleSheet } from 'react-native';
import CallManager from "../manager/CallManager";
import * as variables from '../style/variables';
import {  Text, Button, View } from 'native-base';
import LogoutButton from '../containers/LogoutButton';

class HomeScreen extends React.Component {

    onScan() {
        this.props.navigation.navigate('CodeScanner')
    }

    onGenerate() {
        this.props.navigation.navigate('CodeGenerator')
    }

    onEditInfo() {
        this.props.navigation.navigate('EditInfo');
    }

    onLogout = () => {
        this.props.navigation.navigate('Auth');
    };

    componentDidMount() {
        CallManager.init();
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.header}>Welcome!</Text>
                <Button
                    block
                    primary
                    onPress={() => this.onScan()}
                >
                    <Text>Scan QR code</Text>
                </Button>
                <Button
                    block
                    primary
                    onPress={() => this.onGenerate()}
                    style={style.button}
                >
                    <Text>Generate your QR code</Text>
                </Button>
                <Button
                    block
                    primary
                    onPress={() => this.onEditInfo()}
                    style={style.button}
                >
                    <Text>Edit your information</Text>
                </Button>
                <LogoutButton style={style.button} onLogout={this.onLogout}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: variables.fontXXLarge,
        color: variables.darkTextColor,
        marginBottom: 40
    },
    button: {
        marginTop: 10
    }
});

export default HomeScreen;
