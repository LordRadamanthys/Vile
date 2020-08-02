import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import cardInterface from './interfacesCards/cardInterface'
import AuthContext from '../services/contexts'




const Card = (props: cardInterface) => {
    const { darkmode } = useContext(AuthContext)
    const navigate = useNavigation()
    const [shimmer, setShimmer] = useState(false)
    function goTo(page: string) {
        navigate.navigate(page, { data: props })
    }
    useEffect(() => {
        setShimmer(props.visible)
    }, [])
    return (
        <ShimmerPlaceHolder
            style={{
                width: '100%',
                height: 100,
                borderRadius: 10,
                marginBottom: 25,
            }}
            autoRun={true}
            visible={props.visible}
        >
            <TouchableOpacity
                onPress={() => goTo('NewsDetails')}
                activeOpacity={0.9}
            >
                <View style={!darkmode ? styles.container : styles.containerDark}>
                    <Image source={{ uri: props.image }} style={styles.image} />
                    <Text style={!darkmode ? styles.title : styles.titleDark}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </ShimmerPlaceHolder>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        minHeight: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // borderRadius: 15,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,

    },

    title: {
        paddingHorizontal: 15,
        color: 'black',
        flex: 1,
        fontSize: 12,
        fontFamily: 'NotoSansJP_400Regular',
    },

    titleDark: {
        paddingHorizontal: 15,
        color: '#6B6B6B',
        flex: 1,
        fontSize: 12,
        fontFamily: 'NotoSansJP_400Regular',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#BABABA',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 20 },
        shadowOpacity: 5,
        shadowRadius: 190,
        elevation: 4,
    },

    containerDark: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: "#121212",
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#C3C3C3',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 20 },
        shadowOpacity: 5,
        shadowRadius: 190,
        elevation: 4,
    },


})
export default Card