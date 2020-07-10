import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-community/async-storage'
import MainCard from '../../components/mainCard'
import Card from '../../components/card'
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native'
import axios from '../../services/api'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import userInterface from '../../interfaces/userInterface'
import newsInterface from '../../interfaces/newsInterface'

const Home = (value: any) => {
    const [image, setImage] = useState('')
    const [news, setNews] = useState<Array<newsInterface>>([])
    const user: userInterface = value.route.params

    var getPreferences = async () => {
        try {
            const value = await AsyncStorage.getItem('@isSave')
            if (value !== null) {
                // console.log(value)
            } else {
                //console.log(value)

            }
        } catch (e) {
            console.log('teste')
            // error reading value
        }
    }


    async function loadNews() {
        await axios.get('news', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(response => {
            setNews(response.data)
        }).catch(error => {
            console.log(error.response.data)
        })
    }

    useEffect(() => {
        componentDidMount()
        getPreferences()
        setTimeout(loadNews,1000)

    }, [])

    function componentDidMount() {
        getPermissionAsync();
    }

    const getPermissionAsync = async () => {
        if (Constants.platform?.android) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Preciso de permissão para acessar seus arquivos, para você escolher sua foto');
            }
        }
    };

    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                // allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri);
            }

            //console.log(result);
            console.log(image)
        } catch (E) {
            console.log(E);
        }
    };


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View
                    style={styles.profileImgContainer}
                >
                    <TouchableOpacity onPress={_pickImage}>
                        <Image source={image !== '' ? { uri: image } : { uri: user.image } /*require('../../assets/perfil.jpg')*/} style={styles.profileImg} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>
            <View style={styles.main}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>News</Text>
                  
                    {
                        news.map((n) => {
                            if (n.id === 1) {
                                return  <MainCard title={n.title} describe={n.description} text={n.text} image={n.image} page='NewsDetails' visible={true}/>
                            } else {
                                return <Card title={n.title} describe={n.description} text={n.text} image={n.image}  visible={true}/>
                            }
                        })

                    }

                </ScrollView>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    profileImgContainer: {
        height: 60,
        width: 60,
        borderRadius: 40,
        flex: 1,
    },

    profileImg: {
        height: 60,
        width: 60,
        borderRadius: 40,
    },

    container: {
        flex: 1,
        backgroundColor: '#FFC633',
        paddingTop: Constants.statusBarHeight,
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

    header: {
        // backgroundColor:'#fff',
        flexDirection: 'row',
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    titleHeader: {
        fontSize: 32,
        color: '#464141',
        flex: 1.5,
        fontFamily: 'Ubuntu_300Light',
    },










})
export default Home