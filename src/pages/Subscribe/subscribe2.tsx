import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import axios from '../../services/api'
import interestsInterface from '../../interfaces/interestsInterface'
import { View, TouchableOpacity, Text, ActivityIndicator, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import ModalConfirm from '../../components/modalConfirm';
import ModalSuccesses from '../../components/modalSuccesses';

const Subscribe = () => {
    const navigate = useNavigation()
    const route = useRoute()
    const valuePage1 = route.params.data
    const [whatsapp, setWhatsapp] = useState('')
    const [visibilityLoad, setVisibilityLoad] = useState(false)
    const [sex, setSex] = useState('')
    const [instagram, setInstagram] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisibleSuccesses, setModalVisibleSuccesses] = useState(false)
    const [messageModal, setMessageModal] = useState('')
    const [typeModal, setTypeModal] = useState('')

    const [selectedItems, setSelectedItems] = useState<number[]>([])



    const [interests, setInterests] = useState<Array<interestsInterface>>()

    function goBack() {
        navigate.goBack()
    }

    function verifyFields() {
        if (!whatsapp || whatsapp === undefined || !sex || sex === '') return false
        return true
    }

    async function createUser() {
        if (!verifyFields()) {
            setTypeModal('alert')
            setMessageModal('preencha todos os campos')
            return setModalVisible(!modalVisible)
        }

        setVisibilityLoad(true)
        var userInterests = ''
        await selectedItems.map((item: number) => {
            userInterests += String(item) + ','
        })



        var data = new FormData()
        data.append('name', valuePage1.name)
        data.append('email', valuePage1.email)
        data.append('password', valuePage1.password)
        data.append('whatsapp', whatsapp)
        data.append('interests', userInterests)
        data.append('instagram', instagram)
        data.append('sex', sex)
        if (valuePage1.image) {
            data.append('image', {
                uri: valuePage1.image,
                name: `${valuePage1.email}.jpg`,
                type: 'image/jpg'
            })
        }


        await axios.post('user', data, {
            headers: {
                'Content-Type': 'Multipart/form-data'
            }
        }).then(resp => {
            setModalVisibleSuccesses(true)
            setVisibilityLoad(false)
            //AlertBoxConfirm({ title: 'Sucesso', textBtn: 'Ok', message: 'Usuario cadastrado', funcBtn1: () => { navigate.navigate('Login') } })
        }).catch(error => {
            setTypeModal('alert')
            setMessageModal(`${error.response.data.error}`)
            setVisibilityLoad(false)
            setModalVisible(!modalVisible)
            //AlertBoxConfirm({ title: 'Ops', textBtn: 'Ok', message: `${error.response.data.error}`, funcBtn1: () => { } })
            // alert(`${error.response.data.error}`)
        })
    }

    async function getInterests() {
        await axios.get('interests')
            .then(response => {
                setInterests(response.data)
            }).catch(error => {
                //alert('Ops')
            })
    }

    function handleSelectItem(id: number) {
        const alredySelected = selectedItems.findIndex(item => item === id)
        if (alredySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id)
            console.log(filteredItems)
            setSelectedItems(filteredItems)
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    function goLogin(){
        navigate.navigate('Login')
    }

    useEffect(() => {
        if (!valuePage1) return alert('erro')
        getInterests()
    }, [])


    return (

        <View style={styles.container}>

            {!modalVisible ? <></> : <ModalConfirm type={typeModal} setShow={setModalVisible} title={messageModal} show={modalVisible} textBtn='Ok' funcBtn1={() => { }} />}
            {!modalVisibleSuccesses ? <></> : <ModalSuccesses  setShow={setModalVisibleSuccesses} title={'Cadastro efetuado'} show={modalVisibleSuccesses} textBtn='OK' funcBtn1={() => goLogin()} />}

            <View style={styles.header}>
                <TouchableOpacity disabled={visibilityLoad} style={{ flex: 1, alignSelf: 'center' }} onPress={goBack}>
                    <Icon name="arrow-left" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Vile</Text>
            </View>


            <KeyboardAvoidingView behavior='height' style={styles.formLogin}>
                <View style={styles.formHeader}>
                    <Text style={styles.titleForm}>Cadastro 2/2</Text>
                </View>
                <View style={styles.containerTextInput}>
                    <Icon style={{ marginEnd: 10 }} name="phone" size={25} color="#FFC633" />
                    <TextInput
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        placeholder="Digite seu whatsapp"
                        value={whatsapp}
                        onChangeText={setWhatsapp} />
                </View>

                <View style={styles.containerTextInput}>
                    <Icon style={{ marginEnd: 10 }} name="feather" size={25} color="#FFC633" />
                    <TextInput
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        placeholder="Digite seu sexo"
                        value={sex}
                        onChangeText={setSex} />
                </View>

                <View style={styles.containerTextInput}>
                    <Icon style={{ marginEnd: 10 }} name="instagram" size={25} color="#FFC633" />
                    <TextInput
                        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                        placeholder="Digite seu Instagram"
                        value={instagram}
                        onChangeText={setInstagram} />
                </View>

                <View style={styles.checkboxContainer}>
                    <Text>Qual seu principal interesse aqui?</Text>


                    {!interests ? <Text style={{ marginTop: 10 }}>Carregando...</Text> : interests?.map((interest: interestsInterface) => {
                        return (
                            <View key={interest.id} style={styles.checkBoxItens}>
                                <CheckBox
                                    //onPress={() => handleSelectItem(interest.id)}
                                    tintColors={{ true: '#FFC633', false: '' }}
                                    value={selectedItems.includes(interest.id) ? true : false}
                                    // value={valor}
                                    onValueChange={() => handleSelectItem(interest.id)}

                                />
                                <Text style={{ marginEnd: 30 }}>{interest.name}</Text>
                            </View>
                        )
                    })}

                </View>


                <TouchableOpacity
                    disabled={visibilityLoad}
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={createUser}
                >
                    {visibilityLoad ? <ActivityIndicator style={{ paddingHorizontal: 20 }} color="#fff" /> : <Text style={styles.textButton}>Finalizar</Text>}
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>

    )
}

const styles = StyleSheet.create({
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
        marginTop: 70,
        backgroundColor: '#FFB802',
        borderRadius: 20,
        paddingHorizontal: 50,
        paddingVertical: 20
    },

    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium'
    },

    titleForm: {
        color: '#464141',
        fontFamily: 'Ubuntu_300Light',
        marginTop: 20,
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


    formHeader: {
        paddingHorizontal: 10,
        flexDirection: 'row'
    },

    checkboxContainer: {

        backgroundColor: 'rgba(186, 186, 186, 0.25)',
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        fontSize: 16,

    },
    checkBoxItens: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',

    },
    checkbox: {
        color: "black",
        textDecorationColor: 'black'

    }
})
export default Subscribe