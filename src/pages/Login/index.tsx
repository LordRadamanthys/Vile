import React, { useEffect, useState, useContext } from 'react'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text, ImageBackground, TextInput, StyleSheet, KeyboardAvoidingView, Switch, ActivityIndicator } from 'react-native'
import AuthContext from '../../services/contexts'



const Login = () => {
    const { signed, login } = useContext(AuthContext)
    const [isEnabledSwitch, setIsEnabledSwitch] = useState(false)
    const [indicatorLoading, setIndicatorLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigation()

    useEffect(() => {
        verifyPreferences()
    }, [])

    async function actionSwitch() {

        if (isEnabledSwitch) {
            setPreferences(isEnabledSwitch)
        } else {
            cleanPreferences()
            console.log(isEnabledSwitch)
        }
    }

    async function verifyPreferences() {
        const isSave = await AsyncStorage.getItem('@isSave')

        if (isSave) {
            const saveEmail = await AsyncStorage.getItem('@email') as string
            const savePassword = await AsyncStorage.getItem('@password') as string

            setIsEnabledSwitch(true)
            setEmail(saveEmail)
            setPassword(savePassword)

        } else {
            setIsEnabledSwitch(false)
        }
        //console.log(isSave)
    }

    const setPreferences = async (isSave: boolean) => {
        try {
            await AsyncStorage.setItem('@isSave', String(isSave))
            await AsyncStorage.setItem('@email', email)
            await AsyncStorage.setItem('@password', password)
            // // await AsyncStorage.setItem('password', '')
            // await AsyncStorage.setItem('token', String(value.token))
        } catch (e) {
            // saving error
        }
    }


    async function cleanPreferences() {
        await AsyncStorage.clear()
    }

    function goToSubscribe() {
        navigate.navigate('Subscribe1')
    }

    async function goToHome() {
        setIndicatorLoading(true)
        login(email, password).then(() => {
            setIndicatorLoading(false)
            actionSwitch()
        }).catch(error => {
            setIndicatorLoading(false)
        })
    }


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Vile</Text>
            </View>

            <KeyboardAvoidingView behavior='height' style={styles.formLogin}>
                <View style={styles.containerImage}>
                    <ImageBackground source={require('../../assets/home.png')} imageStyle={{ borderRadius: 15, }} style={styles.image}>

                        <Text style={styles.titleForm}>Login</Text>
                    </ImageBackground>
                </View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={(props) => setEmail(props)} />

                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(props) => setPassword(props)} />

                <View style={styles.switchContainer}>
                    <Text style={styles.textSwitch}>Lembrar Senha</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#FFD361" }}
                        thumbColor={isEnabledSwitch ? "#FFC633" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabledSwitch(previousState => !previousState)}
                        value={isEnabledSwitch}

                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={goToHome}
                    disabled={indicatorLoading}
                >
                    {indicatorLoading ? <ActivityIndicator style={{ paddingHorizontal: 20 }} color="#fff" /> : <Text style={styles.textButton}>Entrar</Text>}

                </TouchableOpacity>
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
    containerImage: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,


    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderRadius: 19,
    },

    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textSwitch: {
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 2
    },

    boxText: {
        padding: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(4, 0, 0, 0.73)',
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15
    },

    titleForm: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#464141',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 24,
        padding: 10
    },

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
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
    },

    formLogin: {
        flex: 1,
        marginTop: 30,
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
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#FFB802',
        borderRadius: 20,
        paddingHorizontal: 50,
        paddingVertical: 20
    },

    footer: {
        fontFamily: 'Ubuntu_500Medium',
        padding: 40,
        alignItems: 'center',
        marginBottom: 20
    },

    textCadastro: {
        fontSize: 18,
        color: '#464141',
        fontWeight: 'bold',
        //textDecorationLine: 'underline',
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