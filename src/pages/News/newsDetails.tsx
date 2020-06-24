import React from 'react'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import MainCardDetails from '../../components/mainCardDetails'
import { View, TouchableOpacity, Text, Image, ImageBackground, TouchableHighlight, StyleSheet, ScrollView } from 'react-native'

const NewsDetails = () => {
    const navigate = useNavigation()
    function goBack() {
        navigate.goBack()
    }


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }} onPress={goBack}>
                    <Icon name="arrow-left" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>

            <View style={styles.main}>
                <ScrollView
                    style={styles.scrollMain}
                    showsVerticalScrollIndicator={false}
                >
                    <MainCardDetails title='Alguma noticia interessante' />

                    <View style={styles.editor}>
                        <View
                            style={styles.profileImgContainer}
                        >
                            <Image source={require('../../assets/home.png')} style={styles.profileImg} />
                        </View>
                        <View style={styles.infoEditor}>
                            <Text style={styles.nameEditor}>Mateus lima de Matos</Text>
                            <Text style={styles.subtitleEditor}>Autor</Text>
                        </View>
                    </View>

                    <Text style={styles.mainText}>
                        Lorem ipsum a primis aenean suscipit dolor porta, integer ultricies curabitur augue litora mauris, posuere taciti condimentum praesent
                        pretium aenean. bibendum magna semper orci semper commodo vivamus nullam convallis leo dui, cubilia habitant egestas ut suscipit in suspendisse
                        diam mi sem ac, aliquam quisque dictumst nibh quis aliquam non molestie venenatis. nec maecenas ultricies elementum in faucibus aliquam sit fringilla
                        libero, morbi pharetra duis pulvinar eget adipiscing lectus platea accumsan, elit ut hac vehicula etiam convallis duis consectetur. egestas nibh senectus
                        venenatis ligula hac blandit curabitur ultrices vel, nam suspendisse gravida tristique adipiscing ipsum a himenaeos taciti gravida, per feugiat tortor quisque
                        ad eros in porttitor.

                        Interdum libero etiam viverra erat proin orci aenean libero eleifend nostra, pulvinar ad rhoncus tellus fusce aenean semper massa platea, blandit varius gravida aptent
                        dictumst tincidunt ante ipsum at. elementum consequat mattis metus faucibus non eleifend est ante euismod, accumsan ante netus curabitur sodales velit per eu maecenas fusce,
                        fermentum a ac primis iaculis pellentesque condimentum eu. cubilia proin convallis adipiscing sed ipsum blandit, taciti cubilia donec consequat purus luctus varius, fermentum
                        interdum lorem in facilisis. interdum donec fames aptent nam sodales hendrerit ac interdum aptent sed quam sapien bibendum, auctor condimentum litora tempus placerat donec auctor
                        quis tincidunt convallis mi.

                        Nulla neque euismod libero lorem faucibus rhoncus tempus, pulvinar potenti non habitasse etiam himenaeos, molestie class augue lacinia fermentum tristique. ultricies
                        taciti curabitur faucibus augue feugiat pulvinar odio metus convallis venenatis consequat convallis, quis integer convallis venenatis molestie enim pulvinar praesent
                        cras gravida risus. eget hac etiam facilisis morbi molestie porta, metus mi lacus libero lacinia orci curabitur, ante aenean eros aliquam euismod. placerat egestas curae
                        faucibus volutpat dictumst fermentum viverra sem habitant, tincidunt ullamcorper cubilia tempor luctus blandit quisque scelerisque facilisis, primis cras sociosqu auctor
                        fames aliquam morbi sapien.

                        Venenatis elementum dui tempus suscipit neque ornare aliquet metus facilisis nam, aenean phasellus aliquam ipsum porta convallis libero ut donec, fames sed quisque odio
                        habitasse congue quam curae ornare. sem torquent sem etiam nullam metus nisi purus tortor eget ullamcorper mi integer metus quis orci in eleifend, quam habitasse lacus
                        commodo accumsan porta nulla pellentesque himenaeos curabitur ut eget lacus convallis fermentum. maecenas mi phasellus sapien arcu tristique varius primis blandit, aenean
                        erat sociosqu enim diam ipsum integer urna ac, ultricies nisl hendrerit placerat dolor enim nam. donec tellus magna ut amet rutrum est gravida sollicitudin ut accumsan,
                        sed egestas donec faucibus mattis taciti elit litora cursus tempus venenatis, id commodo ligula augue adipiscing elementum pellentesque egestas vel.

                        Sit porttitor condimentum accumsan metus primis aenean tortor ut, nam lobortis velit dui consequat et leo, amet ullamcorper cursus leo sollicitudin dui semper facilisis,
                        suspendisse placerat torquent vulputate nostra viverra. quam risus diam non donec neque tellus himenaeos amet, et sagittis nisl nulla pretium facilisis vivamus varius,
                        maecenas metus cras integer nec dapibus ut. odio tristique auctor hendrerit venenatis varius vitae id habitasse scelerisque, mollis luctus faucibus congue ut metus laoreet
                        quisque vel, phasellus elementum aliquet aliquam orci gravida tempor vivamus. massa felis cubilia, mollis.
                     </Text>
                </ScrollView>
            </View>

        </View>

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
        padding: 10,
        flexDirection: 'row',
    },
    titleHeader: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 48,
        color:'#464141',
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