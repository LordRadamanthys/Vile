import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

interface ComponentInterface {
    title: string,
    message: string,
    describe: string,
    page: string
}



const MainCard = (props: ComponentInterface) => {
    const navigate = useNavigation()
    function goTo(page: string) {

        navigate.navigate(page)
    }
    return (
        // <View style={styles.container1}>
        //     <Image source={require('../assets/fin.png')} style={styles.image} />
        //     <Text style={styles.text}>{props.title}</Text>

        // </View>

        <ShimmerPlaceHolder
            style={{
                width: '100%',
                height: 200,
                borderRadius: 15,
                marginBottom: 20,
            }}
            autoRun={true}
            visible={true}
        >
            <TouchableOpacity style={styles.container} onPress={() => goTo(props.page)}>
                <ImageBackground source={require('../assets/2.png')} imageStyle={{ borderRadius: 15, }} style={styles.image}>
                    <View style={styles.boxText}>
                        <Text style={styles.title}>{props.title}</Text>
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
        // padding: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(4, 0, 0, 0.60)',
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15
    },

    title: {
        color: '#fff',
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
    }
})
export default MainCard