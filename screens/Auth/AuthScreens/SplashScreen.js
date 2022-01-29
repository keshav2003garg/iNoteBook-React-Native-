import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#009378'} />

            <View style={styles.header}>
                <Text></Text>
            </View>

            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                <Text style={styles.title}>Always take a lead with us!</Text>
                <Text style={styles.text}>Sign in with your account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignInScreen')}}>
                        <LinearGradient style={styles.signin} colors={['#08d4c4', '#01ab9d']}>
                            <Text style={styles.textSignIn}>Get Started</Text>
                            <MaterialIcons name="navigate-next" color='#fff' size={20} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#009378'
    },

    header: {
        flex: 2
    },

    footer: {
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 30
    },

    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },

    text: {
        color: 'grey',
        marginTop: 5
    },

    button: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    signin: {
        width: 150,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

    textSignIn: {
        color: 'white',
        fontWeight: 'bold'
    }
})