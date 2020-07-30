import React, { useState, useEffect } from 'react'
import { StyleSheet, Modal, View, Text, Image, TouchableOpacity } from 'react-native'

interface AlertInterface {
    title: string,
    textBtn: string,
    funcBtn1(): void
    show: boolean,
    setShow(key: boolean): void
    type:string
}

const ModalConfirm = (props: AlertInterface) => {
    const [modalVisible, setModalVisible] = useState(props.show)
    console.log(props.show)
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}
            onRequestClose={() => {
                console.log('jhjgfdghj')
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image style={{ width: 250, height: 175 }} source={props.type === 'error'? require('../assets/404_error.png') : require('../assets/alert_red.png')} />
                    <Text style={styles.titleModal}>{props.title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ ...styles.btnPositiveModal, backgroundColor: "#D01A1A" }}
                            onPress={() => {
                                setModalVisible(!props.show);
                                props.setShow(false)
                            }}
                        >
                            <Text style={styles.textBtnModal}>{props.textBtn}</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default ModalConfirm



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        borderColor: '#D01A1A',
        borderWidth: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 11,
    },

    btnPositiveModal: {
        marginTop: 80,
        marginBottom: 20,
        marginHorizontal: 10,
        // backgroundColor: '#FFB802',
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 15
    },

    titleModal: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 0,
        color: '#464141',
        fontFamily: 'Ubuntu_500Medium'
    },

    textBtnModal: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Ubuntu_500Medium'
    },

})