import React from 'react'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text, Image, ImageBackground, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

const Login = () => {
    const navigate = useNavigation()

    function goToSubscribe() {
        navigate.navigate('Subscribe1')
    }

    function goToHome() {
        navigate.navigate('BottomMenu')
    }



    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>

            <KeyboardAvoidingView behavior='height' style={styles.formLogin}>
                <View style={styles.formHeader}>
                    <Text style={styles.titleForm}>Login</Text>
                    <Image source={require('../../assets/ideia.png')} style={styles.homeImage} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email" />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha" />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={goToHome}
                ><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>
            </KeyboardAvoidingView>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={goToSubscribe}
                    activeOpacity={0.5}
                >
                    <Text style={styles.textCadastro}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC633',
        paddingTop: 20 + Constants.statusBarHeight,
        paddingHorizontal: 20
    },

    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    },

    header: {
        //backgroundColor:'#fff',
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    titleHeader: {
        fontSize: 48,
        fontFamily: 'Ubuntu_500Medium',
    },

    formLogin: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 30,
        //alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 1,
        shadowRadius: 9.65,

        elevation: 9,

    },
    input: {
        height: 60,
        backgroundColor: 'rgba(186, 186, 186, 0.25)',
        borderRadius: 20,
        marginBottom: 35,
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        alignSelf: 'center',
        marginTop: 70,
        backgroundColor: '#FFB802',
        borderRadius: 20,
        paddingHorizontal: 50,
        paddingVertical: 20
    },
    titleForm: {
        fontFamily: 'Ubuntu_500Medium',
        marginTop: 30,
        marginBottom: 35,
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 24,

    },
    footer: {
        fontFamily: 'Ubuntu_500Medium',
        padding: 40,
        alignItems: 'center',
        marginBottom: 20
    },

    textCadastro: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    homeImage: {

        width: '100%',
        height: 150,
        marginBottom: 30,
        resizeMode: 'center',


    },

    formHeader: {
        paddingHorizontal: 10,
        flexDirection: 'row'
    }
})
export default Login