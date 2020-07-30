import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../services/contexts'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import { View, TouchableOpacity, Text, Image, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native'
import axios from '../../services/api'
import alertBoxChoose from '../../components/alertBoxChoose'
import alertBoxConfirm from '../../components/alertBoxConfirm'
import { ActivityIndicator } from 'react-native-paper'
import ModalChooser from '../../components/modalChooser'

const Profile = () => {
    const { user, clearUser } = useContext(AuthContext)
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const [whatsapp, setWhatsapp] = useState('')
    const [instagram, setInstagram] = useState('')
    // const navigate = useNavigation()

    function handleName(value: string) {
        setName(value)
        console.log(name)
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

            console.log(image)
        } catch (E) {
            console.log(E);
        }
    };

    async function updateUser() {
        setLoadingIndicator(true)
        var data = new FormData()
        data.append('name', name)
        data.append('instagram', instagram)
        data.append('whatsapp', whatsapp)
        if (image) {
            data.append('image', {
                uri: image,
                name: 'teste.jpg',
                type: 'image/jpg'
            })
        }


        await axios.put('user', data, {
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'Multipart/form-data'
            }
        }).then(resp => {
            setLoadingIndicator(false)
            alertBoxConfirm({ title: 'Sucesso', textBtn: 'Ok', message: 'Dados foram atualizados', funcBtn1: () => { } })
        }).catch(error => {
            setLoadingIndicator(false)
            alert(`${error.response.data.error}`)
        })
    }

    function exit() {
        setModalVisible(!modalVisible)
        //alertBoxChoose({ title: 'Deseja realmente sair?', message: 'Esse processo limpara suas credenciais salvas!', textBtn1: 'Sim', textBtn2: 'Não', funcBtn1: clearUser })
    }

    useEffect(() => {
        setName(user.name)
        setWhatsapp(user.whatsapp)
        setInstagram(user?.instagram)
        setImage(user.image)
    }, [])

    return (

        <View style={styles.container}>

            {!modalVisible ? <></> : <ModalChooser setShow={setModalVisible} title={`Deseja realmente sair e limpar os dados salvos?`} show={modalVisible} textBtnRight='Sim' textBtnLeft='Não' funcBtn1={clearUser} />}

            <View style={styles.header}>
                <View style={{ flex: 1, alignItems: 'center', }}>
                    <Text style={styles.titleHeader}>Vile</Text>
                </View>
                <RectButton onPress={exit}>
                    <Icon color='#464141' name={'power'} size={30} />
                </RectButton>
            </View>

            <KeyboardAvoidingView behavior='height' style={styles.formLogin}>
                <View style={styles.formHeader}>
                    <Text style={styles.titleForm}>Perfil</Text>
                    <TouchableOpacity
                        onPress={_pickImage}
                        style={styles.profileImgContainer}
                    >
                        <Image source={image ? { uri: image } : require('../../assets/perfil.jpg')} style={styles.profileImg} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleInput}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Nome"
                    onChangeText={(props) => handleName(props)}
                    value={name} />
                <Text style={styles.titleInput}>Instagram:</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Instagram"
                    value={instagram}
                    onChangeText={setInstagram}
                />
                <Text style={styles.titleInput}>Whatsapp:</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Whatsapp"
                    onChangeText={setWhatsapp}
                    value={whatsapp} />

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={updateUser}
                    disabled={loadingIndicator}
                >
                    {loadingIndicator ? <ActivityIndicator style={{ paddingHorizontal: 20 }} color="#fff" /> : <Text style={styles.textButton}>Salvar</Text>}
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>

    )
}


const styles = StyleSheet.create({

    profileImgContainer: {
        marginHorizontal: 40,
        marginBottom: 20,
        height: 80,
        width: 80,
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
        height: 80,
        width: 80,
        borderRadius: 40,
    },

    container: {
        flex: 1,
        backgroundColor: '#FFC633',
        paddingTop: 20 + Constants.statusBarHeight,
        paddingHorizontal: 20
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',

    },

    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    },

    titleHeader: {

        fontSize: 48,
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
    },

    formLogin: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 30,
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
    input: {
        height: 50,
        backgroundColor: 'rgba(186, 186, 186, 0.25)',
        borderRadius: 20,
        marginBottom: 35,
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: '#FFB802',
        borderRadius: 20,
        paddingHorizontal: 50,
        paddingVertical: 20
    },

    titleForm: {
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
        marginTop: 30,
        marginBottom: 10,
        textAlign: 'left',
        fontSize: 24,

    },

    titleInput: {
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
        marginBottom: 10,
        textAlign: 'left',
        fontSize: 17,

    },

    textCadastro: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },


    formHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Profile