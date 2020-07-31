import React, { useState, useEffect, useContext } from 'react'
import Constants from 'expo-constants'
import MainCard from '../../components/mainCard'
import Card from '../../components/card'
import { View, TouchableOpacity, Text, Image, FlatList, StyleSheet} from 'react-native'
import axios from '../../services/api'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import newsInterface from '../../interfaces/newsInterface'
import AuthContext from '../../services/contexts'

const Home = () => {
    const { user } = useContext(AuthContext)
    const [image, setImage] = useState('')
    const [cardsVisibility, setCardsVisibility] = useState(false)
    const [news, setNews] = useState<Array<newsInterface>>()



    async function loadNews() {

        await axios.get('news', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(response => {

            setNews(response.data.reverse())
            setCardsVisibility(true)
        }).catch(error => {
            console.log(error.response.data)
        })
    }



    useEffect(() => {
        componentDidMount()
        setImage(user.image)
        setTimeout(loadNews, 2000)

    }, [])
    
    // useEffect(() => {
    //     connect()
    //     socket.on('pushNews', value =>{
    //         setNews([...news, value])
    //     })
       
    // }, [])

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

    const renderItem = ({ item }) => {
        if (news?.indexOf(item) === 0) {
            return <MainCard key={item.id} title={item.title} describe={item.description} text={item.text} image={item.image} page='NewsDetails' idAuthor={item.idAuthor} visible={cardsVisibility} />
        } else {
            return <Card key={item.id} title={item.title} describe={item.description} text={item.text} image={item.image} idAuthor={item.idAuthor} visible={cardsVisibility} />
        }

    }

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
                        <Image source={image !== '' ? { uri: image } : require('../../assets/perfil.jpg')} style={styles.profileImg} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleHeader}>Vile</Text>
            </View>
            <View style={styles.main}>


                <FlatList
                    ListHeaderComponent={<Text style={styles.title}>News</Text>}
                    data={news}
                    ListEmptyComponent={news?.length<1 && cardsVisibility? <Text>Nenhuma noticias disponnivel</Text> : <MainCard key={''} title={''} describe={''} text={''} image={''} page='NewsDetails' visible={cardsVisibility} />}
                    renderItem={renderItem}
                    refreshing={false}
                    onRefresh={loadNews}
                    
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(i, k) => k.toString()}
                />
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