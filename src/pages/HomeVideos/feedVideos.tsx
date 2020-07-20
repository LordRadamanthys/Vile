import React, { useEffect, useState, useContext } from 'react'
import Constants from 'expo-constants'
import CardVideos from '../../components/cardVideos'
import axios from '../../services/api'
import videosInterface from '../../interfaces/videosInterface'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import userInterface from '../../interfaces/userInterface';
import AuthContext from '../../services/contexts'

const itemDefault: Array<videosInterface> = [
    {
        description: 'string',
        id: 1,
        idAuthor: 1,
        path: 'string',
        title: 'string',
    },
    {
        description: 'string',
        id: 2,
        idAuthor: 1,
        path: 'string',
        title: 'string',
    }, {
        description: 'string',
        id: 3,
        idAuthor: 1,
        path: 'string',
        title: 'string',
    }, {
        description: 'string',
        id: 4,
        idAuthor: 1,
        path: 'string',
        title: 'string',
    }, {
        description: 'string',
        id: 5,
        idAuthor: 1,
        path: 'string',
        title: 'string',
    },
]
const FeedVideos = (value: any) => {
    const { user } = useContext(AuthContext)
    const [videos, setVideos] = useState<Array<videosInterface>>()
    const [cardsVisibility, setCardsVisibility] = useState(false)
    useEffect(() => {
        setTimeout(loadVideos, 2000)
    }, [])

    async function loadVideos() {
        await axios.get('videos', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(response => {
            setVideos(response.data)
            setCardsVisibility(true)
        }).catch(error => {
            alert(`${error.response.data}`)
        })
    }

    const renderItem = ({ item }) => {
        if (!item.id) {
            console.log('aqui não')
            return <Text>Não veio</Text>
        } else {
            console.log('aqui não')
            return <CardVideos key={item.id} title={item.title} describe={item.description} page='NewsDetails' video={item.path} visible={cardsVisibility} />
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Vile</Text>
            </View>
            <View style={styles.main}>
                <FlatList
                    ListHeaderComponent={<Text style={styles.title}>Videos</Text>}
                    data={videos}
                    ListEmptyComponent={videos?.length <1 && cardsVisibility ? <Text>Nenhum video disponivel no momento </Text> :<CardVideos key={''} title={''} describe={''} page='NewsDetails' video={''} visible={cardsVisibility} />}
                    renderItem={renderItem}
                    refreshing={false}
                    onRefresh={loadVideos}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(i, k) => k.toString()}
                />
                {/* <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>Videos</Text>
                    {videos.map(v => (

                        <CardVideos key={v.id} title={v.title} describe={v.description} page='NewsDetails' video={v.path} visible={cardsVisibility} />
                    ))}


                </ScrollView> */}
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