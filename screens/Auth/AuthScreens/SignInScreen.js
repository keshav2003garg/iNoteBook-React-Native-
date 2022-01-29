import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import noteContext from '../../../context/NoteContext'

export default function SingnInScreen({ navigation }) {

    const context = useContext(noteContext);
    const {login} = context;


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const handleLogin = async()=>{
        const isLogin = await login(email, password);
        if(isLogin===true){
            navigation.navigate('NotesScreen');
        }
    }

    const handleSecureTextEntry = () => {
        if(secureTextEntry===true){
        setSecureTextEntry(false)
        }
        else{
            setSecureTextEntry(true)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#009378'} />

            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome Back!</Text>
            </View>

            <Animatable.View style={styles.footer} animation='fadeInUpBig'>

                <View style={styles.actionContainer}>
                    <Text style={styles.footerText}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome name='user-o' color='#05375a' size={20} />
                        <TextInput style={styles.textInput} placeholder="Your Email" autoComplete='email' autoCapitalize='none' value={email} onChangeText={(text)=>{setEmail(text)}} />
                        {email===null ? null : <Feather name='check-circle' color='green' size={20} />}
                    </View>
                </View>

                <View style={styles.actionContainer}>
                    <Text style={styles.footerText}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome name='lock' color='#05375a' size={20} />
                        <TextInput style={styles.textInput} placeholder="Your Password" secureTextEntry={secureTextEntry} autoCapitalize='none' value={password} onChangeText={(text)=>{setPassword(text)}} />
                        <TouchableOpacity onPress={handleSecureTextEntry}>{secureTextEntry ? <Feather name='eye' color='green' size={20} /> : <Animatable.View animation='bounceIn'><Feather name='eye-off' color='green' size={20} /></Animatable.View>}</TouchableOpacity>
                    </View>
                </View>


                <TouchableOpacity onPress={handleLogin}>
                    <LinearGradient style={styles.signin} colors={['#08d4c4', '#01ab9d']} >
                        <Text style={styles.textSignIn}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('SignUpScreen') }}>
                    <LinearGradient style={styles.signup} colors={['#fff', '#fff']} >
                        <Text style={styles.textSignUp}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>

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
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },

    headerText: {
        marginLeft: 15,
        marginBottom: 35,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },

    footer: {
        paddingHorizontal: 25,
        paddingVertical: 40,
        backgroundColor: '#fff',
        flex: 2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    footerText: {
        color: '#05375a',
        fontSize: 16
    },

    actionContainer: {
        marginBottom: 17
    },

    action: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },

    textInput: {
        height: 35,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#05375a',
        flex: 1

    },

    signin: {
        marginTop: 22,
        width: 300,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },

    textSignIn: {
        color: 'white',
        fontWeight: 'bold'
    },

    signup: {
        marginTop: 10,
        width: 300,
        height: 38,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#009378',
        borderWidth: 1,
        borderRadius: 12
    },

    textSignUp: {
        color: '#009378',
        fontWeight: 'bold'
    },
})