import React,{useEffect, useState} from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Video } from 'expo-av';

interface ComponentInterface {
    title: string,
    message: string,
    describe: string,
    page: string
}



const CardVideos = (props: ComponentInterface) => {
    const [isPlaying,setIsPlaying] = useState(true)
    const navigate = useNavigation()
    function goTo(page: string) {

        navigate.navigate(page)
    }

    function play(){
        if(isPlaying){
            setIsPlaying(false)
        }else{
            setIsPlaying(true)
        }
    }
    return (
        // <View style={styles.container1}>
        //     <Image source={require('../assets/fin.png')} style={styles.image} />
        //     <Text style={styles.text}>{props.title}</Text>

        // </View>
        <TouchableOpacity style={styles.container} onPress={() => play()}>
                <Video
                    // source={require('../assets/teste.mp4')}
                    source={{ uri: 'https://www.youtube.com/watch?v=2YXEtKboQas' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    useNativeControls
                    resizeMode="contain"
                
                
                    //shouldPlay={isPlaying}
                    style={styles.video}
                />
                <View style={isPlaying ? styles.boxText : styles.boxTextHide}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: 200,
        borderRadius: 13,
        flex:1
    },

    boxText: {
        // padding: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(4, 0, 0, 0.30)',
        position:'absolute',
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15
    },

    boxTextHide: {
        // padding: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(4, 0, 0, 0.60)',
        display:'none',
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15
    },

    title: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 10,
        fontFamily: 'NotoSansJP_400Regular',
    },

    

    container: {
        justifyContent: 'flex-end',
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
    }
})
export default CardVideos