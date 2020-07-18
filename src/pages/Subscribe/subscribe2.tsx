import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import axios from '../../services/api'
import interestsInterface from '../../interfaces/interestsInterface'
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { List } from 'react-native-paper';

const Subscribe = () => {
    const route = useRoute()
    const value = route.params
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const [valor, setValor] = useState( false)

    const navigate = useNavigation()

    const [interests, setInterests] = useState<Array<interestsInterface>>([])
    const [userInterests, setUserInterests] = useState('')

    function goBack() {
        navigate.goBack()
    }

    function addUserInterests(id: number) {
        setUserInterests((id) => {
            return (
                id
            )
        })
        console.log(userInterests)
    }
    async function updateUser() {

        // setPassword(user.password)


        var data = new FormData()
        data.append('name', name)
        //data.append('password', password)
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

        }).catch(error => {
            alert(`${error.response.data.error}`)
        })
    }

    async function getInterests() {
        await axios.get('interests')
            .then(response => {
                setInterests(response.data)
            }).catch(error => {
                alert(error.response.data.error)
            })
    }

    function handleSelectItem(id: number) {
        const alredySelected = selectedItems.findIndex(item => item === id)
        if (alredySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id)
            setSelectedItems(filteredItems)
        } else {
            setSelectedItems([...selectedItems, id])
        }

    }

    useEffect(() => {
        //console.log(value)
        getInterests()
    }, [])
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }} onPress={goBack}>
                    <Icon name="arrow-left" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Eleva</Text>
            </View>


            <KeyboardAvoidingView behavior='height' style={styles.formLogin}>
                <View style={styles.formHeader}>
                    <Text style={styles.titleForm}>Cadastro 2/2</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Digite seu celular" />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    placeholder="Digite seu sexo" />

                <View style={styles.checkboxContainer}>
                    <Text>Qual seu principal interesse aqui?</Text>

                    {/* <View style={styles.checkBoxItens}>
                        <CheckBox
                            tintColors={{ true: '#FFC633', false: '' }}
                            value={false}
                            onValueChange={()=>{}}
                        />
                        <Text style={{ marginEnd: 30 }}>Marketing</Text>

                        
                    </View> */}


                    
                    {interests?.map((interest: interestsInterface) => {
                        return (
                            <View key={interest.id} style={styles.checkBoxItens}>
                                <CheckBox
                                    
                                    tintColors={{ true: '#FFC633', false: '' }}
                                    value={valor}
                                    onValueChange={()=>setValor(!valor)}
                                    
                                />
                                <Text style={{ marginEnd: 30 }}>{interest.name}</Text>
                            </View>
                        )
                    })}

                </View>


                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={() => { }}
                >
                    <Text style={styles.textButton}>Finalizar</Text>
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
    input: {
        height: 60,
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