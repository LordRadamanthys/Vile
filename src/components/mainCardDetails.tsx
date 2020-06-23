import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native'

interface ComponentInterface {
    title: string,
}

const MainCardDetails = (props: ComponentInterface) => {
    return (
        // <View style={styles.container1}>
        //     <Image source={require('../assets/fin.png')} style={styles.image} />
        //     <Text style={styles.text}>{props.title}</Text>

        // </View>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/fin.png')} imageStyle={{ borderRadius: 15, }} style={styles.image}>
                <View style={styles.boxText}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 19,

    },

    boxText: {
        padding: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(4, 0, 0, 0.73)',
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15
    },

    title: {
        color: '#fff',
        fontSize: 18
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 19,


    }
})


export default MainCardDetails