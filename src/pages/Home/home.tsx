import React from 'react'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import MainCard from '../../components/mainCard'
import Card from '../../components/card'
import { View, TouchableOpacity, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView } from 'react-native'

const Home = () => {
    const navigate = useNavigation()


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>
            <View style={styles.main}>
                <ScrollView
                    showsVerticalScrollIndicator={false}

                >
                    <Text style={styles.title}>News</Text>
                    <MainCard title='Alguma noticia interessante' describe='' message='' />
                    <Card title='Alguma noticia interessantehjshdsdsdsdsdsd dsdsd dsddsdjkshksdhfjkdhfjkhdjkfhkjd' describe='' message='' />
                    <Card title='Alguma noticia interessante' describe='' message='' />
                    <Card title='Alguma noticia interessantehjshdsdsdsdsdsd dsdsd dsddsdjkshksdhfjkdhfjkhdjkfhkjd' describe='' message='' />
                    <Card title='Alguma noticia interessante' describe='' message='' />
                    <Card title='Alguma noticia interessantehjshdsdsdsdsdsd dsdsd dsddsdjkshksdhfjkdhfjkhdjkfhkjd' describe='' message='' />
                    <Card title='Alguma noticia interessante' describe='' message='' />
                    <Card title='Alguma noticia interessantehjshdsdsdsdsdsd dsdsd dsddsdjkshksdhfjkdhfjkhdjkfhkjd' describe='' message='' />
                    <Card title='Alguma noticia interessante' describe='' message='' />
                    <Card title='Alguma noticia interessantehjshdsdsdsdsdsd dsdsd dsddsdjkshksdhfjkdhfjkhdjkfhkjd' describe='' message='' />
                    <Card title='Alguma noticia interessante' describe='' message='' />
                    <Card title='Alguma noticia interessantehjshdsdsdsdsdsd dsdsd dsddsdjkshksdhfjkdhfjkhdjkfhkjd' describe='' message='' />
                    <Card title='Alguma noticia interessante' describe='' message='' />
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
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },

    title: {
        padding: 20,
        fontSize: 24,
        fontFamily: 'Ubuntu_500Medium',
    },

    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    },

    header: {
        // backgroundColor:'#fff',
        padding: 10,
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
export default Home