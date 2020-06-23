import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native'

interface ComponentInterface {
    title: string,
    message: string,
    describe: string,
}

const Card = (props: ComponentInterface) => {
    return (
        <TouchableOpacity
            onPress={() => { }}
            activeOpacity={0.9}
        >
            <View style={styles.container}>
                <Image source={require('../assets/fin.png')} style={styles.image} />
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>

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
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,

    },

    title: {
        paddingHorizontal: 15,
        color: 'black',
        flex: 1,
        fontSize: 18,
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 19,
        borderStyle: 'solid',
        borderColor: '#FFC633',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 20 },
        shadowOpacity: 5,
        shadowRadius: 190,
        elevation: 4,

    }
})
export default Card