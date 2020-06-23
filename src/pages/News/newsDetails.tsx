import React from 'react'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import MainCardDetails from '../../components/mainCardDetails'
import { View, TouchableOpacity, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView } from 'react-native'

const NewsDetails = () => {
    const navigate = useNavigation()
    function goBack() {
        navigate.goBack()
    }


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }} onPress={goBack}>
                    <Icon name="arrow-left" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>
            <View style={styles.main}>
                <ScrollView
                    style={styles.scrollMain}
                    showsVerticalScrollIndicator={false}

                >
                    <MainCardDetails title='Alguma noticia interessante' />
                    <Text style={styles.mainText}>	Lorem ipsum aptent enim fames nam rhoncus nisl aliquam interdum, cubilia dapibus porttitor praesent
                    dictumst sollicitudin malesuada. metus hendrerit integer mi commodo turpis integer, sollicitudin lacus
                    ullamcorper cras pellentesque, est pretium posuere nunc ut. praesent ac ut molestie turpis conubia ut
                    morbi, class augue magna primis cursus consectetur adipiscing, habitasse diam dapibus at curae ligula.
                    vulputate donec tortor conubia posuere accumsan hendrerit facilisis, accumsan vestibulum sociosqu suscipit
                    morbi nam aptent per, feugiat eleifend mauris quam urna enim. nisi enim maecenas egestas urna fringilla venenatis,
                    feugiat diam lobortis porta ultricies maecenas, torquent aenean luctus aliquet viverra.
                    us pretium mauris fermentum elit enim, vivamus torqueae habitasse semper diam consequat eleifend ipsum,
                    vivamus nibh hac diam dictum arcu
                    us pretium mauris fermentum elit enim, vivamus torqueae habitasse semper diam consequat eleifend ipsum,
                    vivamus nibh hac diam dictum arcu
                    tellus orci iaculis dapibus dui, ac tristique praesent tempor placerat consectetur habitasse vel inceptos viverra nunc.
                    tellus orci iaculis dapibus dui, ac tristique praesent tempor placerat consectetur habitasse vel inceptos viverra nunc.
                    us pretium mauris fermentum elit enim, vivamus torqueae habitasse semper diam consequat eleifend ipsum,
                    vivamus nibh hac diam dictum arcu
                    tellus orci iaculis dapibus dui, ac tristique praesent tempor placerat consectetur habitasse vel inceptos viverra nunc. </Text>
                </ScrollView>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC633',
        paddingTop: Constants.statusBarHeight,
    },

    main: {

        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFC633'
    },

    mainText: {
        fontFamily: 'Roboto_500Medium',
        paddingHorizontal: 10,


    },

    scrollMain: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },


    header: {
        padding: 10,
        flexDirection: 'row',
    },
    titleHeader: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
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
export default NewsDetails