import React, { useEffect, useContext, useState } from 'react'
import Constants from 'expo-constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import MainCardDetails from '../../components/mainCardDetails'
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native'
import newsInterface from '../../interfaces/newsInterface'
import userInterface from '../../interfaces/userInterface'
import axios from '../../services/api'
import AuthContext from '../../services/contexts'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';


const NewsDetails = () => {
    const route = useRoute()
    const newsInfo: newsInterface = route.params.data
    const { user } = useContext(AuthContext)
    const navigate = useNavigation()
    const [shimmerVisibility, setShimmerVisibility] = useState(false)
    const [author, setAuthor] = useState<userInterface>()

    useEffect(() => {
        async function loadAuthor() {
            await axios.get(`user/${newsInfo?.idAuthor}`, {
                headers: {
                    'Authorization': 'Bearer ' + user?.token
                }
            }).then(response => {
                setAuthor(response.data)
                setShimmerVisibility(true)
            }).catch(error => {
                console.log(newsInfo)
                console.log(error.response.data.error)
            })
        }
        loadAuthor()

    }, [])


    function goBack() {
        navigate.goBack()
    }


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{justifyContent:'center'}}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon name="arrow-left" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.titleHeader}>Vile</Text>
                </View>
            </View>

            <View style={styles.main}>
                <ScrollView
                    style={styles.scrollMain}
                    showsVerticalScrollIndicator={false}
                >
                    <MainCardDetails title='Alguma noticia interessante' image={newsInfo.image} />

                    <View style={styles.editor}>
                        <View style={styles.profileImgContainer} >
                            <ShimmerPlaceHolder style={styles.profileImg} autoRun={true} visible={shimmerVisibility}>
                                <Image source={{ uri: author?.image }} style={styles.profileImg} />
                            </ShimmerPlaceHolder>
                        </View>
                        <View style={styles.infoEditor}>
                            <ShimmerPlaceHolder style={styles.nameEditor} autoRun={true} visible={shimmerVisibility}>
                                <Text style={styles.nameEditor}>{author?.name}</Text>
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder style={styles.subtitleEditor} autoRun={true} visible={shimmerVisibility}>
                                <Text style={styles.subtitleEditor}>Autor</Text>
                            </ShimmerPlaceHolder>
                        </View>
                    </View>
                    <Text style={styles.mainText}>
                        {newsInfo.text}
                    </Text>
                </ScrollView>
            </View>

        </View >

    )
}

const styles = StyleSheet.create({

    editor: {
        padding: 5,
        flexDirection: 'row',
        marginVertical: 10
    },
    infoEditor: {
        justifyContent: 'center',
        marginHorizontal: 10,
        flexDirection: 'column'
    },
    profileImgContainer: {
        marginLeft: 10,
        height: 60,
        width: 60,
        borderRadius: 40,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    profileImg: {
        height: 60,
        width: 60,
        borderRadius: 40,
    },

    nameEditor: {
        fontSize: 14,
        fontFamily: 'NotoSansJP_300Light',
        fontStyle: 'italic',
    },

    subtitleEditor: {
        fontStyle: 'italic',
        fontSize: 12,
        fontFamily: 'NotoSansJP_300Light',
    },

    container: {
        flex: 1,
        backgroundColor: '#FFC633',
        paddingTop: Constants.statusBarHeight,
    },

    main: {

        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFC633'
    },

    mainText: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'NotoSansJP_400Regular',
        paddingHorizontal: 20,
        color: '#464141',
        lineHeight: 25,
        marginBottom: 30
        // NotoSansJP_400Regular,
        // NotoSansJP_300Light,
        // NotoSansJP_500Medium,
    },

    scrollMain: {
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },


    header: {
        justifyContent:'center',
        alignContent:'center',
        padding: 10,
        flexDirection: 'row',
    },
    titleHeader: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 48,
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
    },

    formLogin: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 30,
        //alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 1,
        shadowRadius: 9.65,

        elevation: 9,

    },

    titleForm: {
        fontFamily: 'Ubuntu_500Medium',
        marginTop: 30,
        marginBottom: 35,
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 24,

    },
    footer: {
        fontFamily: 'Ubuntu_500Medium',
        padding: 40,
        alignItems: 'center',
        marginBottom: 20
    },

    textCadastro: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    homeImage: {

        width: '100%',
        height: 150,
        marginBottom: 30,
        resizeMode: 'center',


    },

    formHeader: {
        paddingHorizontal: 10,
        flexDirection: 'row'
    }
})
export default NewsDetails