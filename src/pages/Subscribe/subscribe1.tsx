import React, { useEffect, useState, useContext } from 'react'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import ModalConfirm from '../../components/modalConfirm';
import { ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../services/contexts'

const Subscribe = () => {

    const { darkmode } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [typeModal, setTypeModal] = useState('')
    const [image, setImage] = useState('')
    const [messageModal, setMessageModal] = useState('')
    const navigate = useNavigation()

    function goBack() {
        navigate.goBack()
    }

    function goToNext() {
        if (!verifyFields()) {
            setTypeModal('alert')
            setMessageModal('Ops, preencha todos os campos para continuar')
            return setModalVisible(true)
        } //alert('preencha os campos')
        if (password !== confirmPassword) {
            setTypeModal('alert')
            setMessageModal('Senhas não são iguais')
            return setModalVisible(!modalVisible)
        }
        const data = {
            name,
            email,
            password,
            image,
        }
        navigate.navigate('Subscribe2', { data, uri: image })
    }

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
    }

    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
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

    function verifyFields() {
        if (!name || !email || !password || !confirmPassword || !image) return false

        return true
    }

    useEffect(() => {
        componentDidMount()
    }, [])

    return (

        <View style={styles.container}>
            {!modalVisible ? <></> : <ModalConfirm type={typeModal} setShow={setModalVisible} title={messageModal} show={modalVisible} textBtn='Ok' funcBtn1={() => { }} />}

            <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }} onPress={goBack}>
                    <Icon name="arrow-left" size={28} color={!darkmode ? "#fff" : "#464141"} />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Vile</Text>
            </View>

            <KeyboardAvoidingView behavior='height' style={!darkmode ? styles.formLogin : styles.formLoginDark}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.formHeader}>
                        <Text style={!darkmode ? styles.titleForm: styles.titleFormDark}>Cadastro 1/2</Text>
                    </View>

                    <TouchableOpacity onPress={_pickImage} style={styles.profileImgContainer}>
                        <Image source={image ? { uri: image } : require('../../assets/perfil.jpg')} style={styles.profileImg} />
                    </TouchableOpacity>

                    <View style={styles.containerTextInput}>
                        <Icon style={{ marginEnd: 10 }} name="user" size={25} color="#FFC633" />
                        <TextInput
                            style={{ maxWidth: 200 }}
                            placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                            placeholder="Digite seu nome"
                            onChangeText={setName} />
                    </View>

                    <View style={styles.containerTextInput}>
                        <Icon style={{ marginEnd: 10 }} name="mail" size={25} color="#FFC633" />
                        <TextInput
                            style={{ maxWidth: 200 }}
                            placeholderTextColor={ 'rgba(0, 0, 0, 0.5)'}
                            placeholder="Digite seu e-mail"
                            keyboardType='email-address'
                            onChangeText={setEmail} />
                    </View>

                    <View style={styles.containerTextInput}>
                        <Icon style={{ marginEnd: 10 }} name="key" size={25} color="#FFC633" />
                        <TextInput
                            style={{ maxWidth: 200 }}
                            placeholderTextColor={ 'rgba(0, 0, 0, 0.5)'}
                            placeholder="Digite uma senha"
                            secureTextEntry={true}
                            onChangeText={setPassword} />
                    </View>

                    <View style={styles.containerTextInput}>
                        <Icon style={{ marginEnd: 10 }} name="key" size={25} color="#FFC633" />
                        <TextInput
                            style={{ maxWidth: 200 } }
                            placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                            placeholder="Confirme sua senha"
                            secureTextEntry={true}
                            onChangeText={setConfirmPassword} />
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={goToNext}>
                        <Text style={styles.textButton}>Próximo</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </View >

    )
}

const styles = StyleSheet.create({

    profileImgContainer: {
        alignSelf: 'center',
        marginHorizontal: 40,
        marginBottom: 15,
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
        padding: 10,
        flexDirection: 'row',

    },

    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    },

    titleHeader: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 48,
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
    },

    formLogin: {
        flex: 1,
        marginTop: 30,
        marginBottom: 50,
        paddingHorizontal: 20,
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
    
    formLoginDark: {
        flex: 1,
        marginTop: 30,
        marginBottom: 50,
        paddingHorizontal: 20,
        backgroundColor: '#121212',
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
    containerTextInput: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(186, 186, 186, 0.25)',
        borderRadius: 20,
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 20,
        fontSize: 16,
    },

    button: {
        alignSelf: 'center',
        marginTop: 5,
        backgroundColor: '#FFB802',
        borderRadius: 20,
        paddingHorizontal: 50,
        paddingVertical: 20
    },

    titleForm: {
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'left',
        fontSize: 24,
    },

    titleFormDark: {
        color: '#6B6B6B',
        fontFamily: 'Ubuntu_300Light',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'left',
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
export default Subscribe