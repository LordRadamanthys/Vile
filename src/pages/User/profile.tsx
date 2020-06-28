import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { View, TouchableOpacity, Text, Image, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native'

const Profile = () => {

    const navigate = useNavigation()

    function goBack() {
        navigate.goBack()
    }

    function goToNext() {
        navigate.navigate('Subscribe2')
    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.titleHeader}>Eleva</Text>
            </View>




            <KeyboardAvoidingView behavior='height' style={styles.formLogin}>
                <View style={styles.formHeader}>
                    <Text style={styles.titleForm}>Perfil</Text>
                    <View
                        style={styles.profileImgContainer}
                    >
                        <Image source={require('../../assets/perfil.jpg')} style={styles.profileImg} />
                    </View>
                </View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Nome" />

                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Senha" />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Celular" />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={goToNext}
                >
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>

    )
}


const styles = StyleSheet.create({

    profileImgContainer: {
        marginHorizontal: 40,
        marginBottom: 20,
        height: 80,
        width: 80,
        borderRadius: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },

    container: {
        flex: 1,
        backgroundColor: '#FFC633',
        paddingTop: 20 + Constants.statusBarHeight,
        paddingHorizontal: 20
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',

    },

    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    },

    titleHeader: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 48,
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
    },

    formLogin: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
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

    titleForm: {
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
        marginTop: 30,
        marginBottom: 10,
        textAlign: 'left',
        fontSize: 24,

    },

    textCadastro: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },


    formHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Profile