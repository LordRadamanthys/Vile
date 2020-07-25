import React from 'react'
import { Alert } from 'react-native'

interface AlertInterface{
    title:string,
    message:string,
    textBtn1:string,
    textBtn2:string,
    funcBtn1(): void
}

const AlertBox = (value:AlertInterface) =>
    Alert.alert(
        value.title,
        value.message,
        [
            {
                text: value.textBtn2,
                //onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {  text: value.textBtn1, onPress: () => value.funcBtn1() }
        ],
        { cancelable: false }
    );

export default AlertBox