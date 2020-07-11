import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import CardVideos from '../../components/cardVideos'
import axios from '../../services/api'
import videosInterface from '../../interfaces/videosInterface'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import userInterface from '../../interfaces/userInterface';


const FeedVideos = (value: any) => {
    const [videos, setVideos] = useState<Array<videosInterface>>([])
    const user: userInterface = value.route.params
    useEffect(() => {
        loadVideos()
    }, [])

    async function loadVideos() {
        await axios.get('videos', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(response => {
            setVideos(response.data)
        }).catch(error => {
            console.log(error.response.data)
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>
            <View style={styles.main}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>Videos</Text>
                    {videos.map(v => (

                        <CardVideos title={v.title} describe={v.description} page='NewsDetails' video={v.path} />
                    ))}


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

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    profileImgContainer: {
        height: 60,
        width: 60,
        borderRadius: 40,
        flex: 1,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,

        // elevation: 7,
    },
    profileImg: {
        height: 60,
        width: 60,
        borderRadius: 40,
    },

    header: {
        // backgroundColor:'#fff',
        flexDirection: 'row',
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
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

    titleHeader: {
        fontSize: 32,
        color: '#464141',
        padding: 10,
        fontFamily: 'Ubuntu_300Light',
    },
})

export default FeedVideos