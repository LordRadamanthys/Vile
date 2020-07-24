import React from 'react'
import { Alert } from 'react-native'

interface AlertInterface {
    title: string,
    message: string,
    textBtn: string,
    funcBtn1(): void
}

const AlertBoxConfirm = (value: AlertInterface) =>
    Alert.alert(
        value.title,
        value.message,
        [
            { text: value.textBtn, onPress: () => !value.funcBtn1 || value.funcBtn1 === undefined ? () => { } : value.funcBtn1() }
        ],
        { cancelable: false }
    );

export default AlertBoxConfirm