import React from 'react'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import CardVideos from '../../components/cardVideos'
import { Video } from 'expo-av';
import { View, TouchableOpacity, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView } from 'react-native'

const FeedVideos = () => {

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
                    
                    <CardVideos title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor' describe='' message='' page='NewsDetails' />
                    <CardVideos title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor' describe='' message='' page='NewsDetails' />
                    <CardVideos title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor' describe='' message='' page='NewsDetails' />
                    <CardVideos title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor' describe='' message='' page='NewsDetails' />


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
        padding:10,
        fontFamily: 'Ubuntu_300Light',
    },
})

export default FeedVideos