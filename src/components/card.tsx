import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface ComponentInterface {
    title: string,
    message: string,
    describe: string,
}

const Card = (props: ComponentInterface) => {
    const navigate = useNavigation()
    function goTo(page: string) {

        navigate.navigate(page)
    }
    return (
        <TouchableOpacity
            onPress={() => goTo('NewsDetails')}
            activeOpacity={0.9}
        >
            <View style={styles.container}>
                <Image source={require('../assets/1.png')} style={styles.image} />
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

    }
})
export default Card