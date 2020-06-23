import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

const Subscribe = () => {
    const navigate = useNavigation()
    const [marketing, setMarketing] = useState<boolean>()
    const [branding, setBranding] = useState<boolean>(false)
    const [financas, setFinancas] = useState<boolean>(false)

    function goBack() {
        navigate.goBack()
    }
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ alignSelf: 'flex-start', justifyContent: 'space-between' }}
                    onPress={goBack}>
                    <Icon name="arrow-left" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>


            <KeyboardAvoidingView behavior='height' style={styles.formLogin}>
                <View style={styles.formHeader}>
                    <Text style={styles.titleForm}>Cadastro 2/2</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu celular" />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu sexo" />

                <View style={styles.checkboxContainer}>
                    <Text>Qual seu principal interesse aqui?</Text>

                    <View style={styles.checkBoxItens}>
                        <CheckBox
                            tintColors={{ true: '#FFC633', false: '' }}
                            value={marketing}
                            onValueChange={setMarketing}
                        />
                        <Text style={{ marginEnd: 30 }}>Marketing</Text>

                        <CheckBox
                            tintColors={{ true: '#FFC633', false: '' }}
                            value={financas}
                            onValueChange={setFinancas}
                        />
                        <Text>Finanças</Text>
                    </View>

                    <View style={styles.checkBoxItens}>
                        <CheckBox
                            tintColors={{ true: '#FFC633', false: '' }}
                            value={branding}
                            onValueChange={setBranding}
                        />
                        <Text style={{ marginEnd: 30 }}>Branding</Text>
                    </View>
                </View>


                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={() => { }}
                >
                    <Text style={styles.textButton}>Finalizar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

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

    header: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    titleHeader: {
        justifyContent: 'center',
        fontSize: 48,
        marginStart: '25%',
        fontFamily: 'Ubuntu_500Medium',
    },

    formLogin: {
        flex: 1,
        marginTop: 50,
        marginBottom: 50,
        paddingHorizontal: 30,
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

    textButton:{
        color:'#fff',
        fontSize:18,
        fontFamily:'Ubuntu_500Medium'
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


    formHeader: {
        paddingHorizontal: 10,
        flexDirection: 'row'
    },

    checkboxContainer: {

        backgroundColor: 'rgba(186, 186, 186, 0.25)',
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        fontSize: 16,

    },
    checkBoxItens: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',

    },
    checkbox: {
        color: "black",
        textDecorationColor: 'black'

    }
})
export default Subscribe