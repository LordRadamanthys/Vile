import React, { useContext } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import mainCardInterface from './interfacesCards/mainCardInterface'
import AuthContext from '../services/contexts'




const MainCard = (props: mainCardInterface) => {
    const { darkmode } = useContext(AuthContext)
    const navigate = useNavigation()
    function goTo(page: string) {

        navigate.navigate(page, { data: props })
    }

    return (

        <ShimmerPlaceHolder
            style={{
                width: '100%',
                height: 200,
                borderRadius: 15,
                marginBottom: 20,
            }}
            autoRun={true}
            visible={props.visible}
        >
            <TouchableOpacity activeOpacity={0.9} style={!darkmode ? styles.container : styles.containerDark} onPress={() => goTo(props.page)}>

                <ImageBackground source={!props.image ? require('../assets/fin.png') : { uri: props.image }} imageStyle={{ borderRadius: 12 }} style={styles.image}>
                    <View style={styles.boxText}>
                        <Text style={!darkmode ? styles.title : styles.titleDark}>{props.title}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity >

        </ShimmerPlaceHolder>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    boxText: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(4, 0, 0, 0.60)',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },

    title: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 10,
        fontFamily: 'NotoSansJP_400Regular',
    },

    titleDark: {
        color: '#C3C3C3',
        fontSize: 16,
        marginHorizontal: 10,
        fontFamily: 'NotoSansJP_400Regular',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderStyle: 'solid',
        borderColor: '#BABABA',
        borderWidth: 2,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 40 },
        shadowOpacity: 5,
        shadowRadius: 100,
        elevation: 4,
    },

    containerDark: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderStyle: 'solid',
        borderColor: '#FFC633',
        borderWidth: 2,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 40 },
        shadowOpacity: 5,
        shadowRadius: 100,
        elevation: 4,
    }
})

export default MainCard