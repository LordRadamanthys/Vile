import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

interface ComponentInterface {
    title: string,
    message: string,
    describe: string,
}

const MainCard = (props: ComponentInterface) => {
    return (
        // <View style={styles.container1}>
        //     <Image source={require('../assets/fin.png')} style={styles.image} />
        //     <Text style={styles.text}>{props.title}</Text>

        // </View>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/fin.png')} imageStyle={{ borderRadius:15, }} style={styles.image}>
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
        marginBottom:20,
        borderStyle: 'solid',
        borderColor: '#FFC633',
        borderWidth: 2,
        borderRadius: 19,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 40 },
        shadowOpacity: 5,
        shadowRadius: 100,
        elevation: 4,
    }
})
export default MainCard