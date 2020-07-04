import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import MainCard from '../../components/mainCard'
import Card from '../../components/card'
import { View, TouchableOpacity, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView } from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const Home = () => {
    const navigate = useNavigation()
    const [image, setImage] = useState('')

    useEffect(() => {
        componentDidMount()
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
                        <Image source={image !== '' ? { uri: image } : require('../../assets/perfil.jpg')} style={styles.profileImg} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>
            <View style={styles.main}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>News</Text>
                    <MainCard title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor' describe='' message='' page='NewsDetails' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, el ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />
                    <Card title='Lorem ipsum phasellus lacinia pretium metus adipiscing est auctor, vel ac ad, lacus lobortis etiam' describe='' message='' />

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