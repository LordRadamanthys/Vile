import React, { createContext, useState, useEffect } from 'react'
import axios from './api'
import AsyncStorage from '@react-native-community/async-storage'
import userInterface from '../interfaces/userInterface'
import AlertBoxConfirm from '../components/alertBoxConfirm'


interface Provider {
    signed: boolean,
    user: userInterface | null
    login(email: string, password: string): Promise<void>
    clearUser(): void
    showModal(key: boolean): void,
    visibilityModal: boolean,
    errorMessageLogin: string
}

const AuthContext = createContext<Provider>({} as Provider)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<userInterface | null>(null)
    const [modalVisible, setModalVisible] = useState(false)
    let errorMessage = 'Houve um erro com a rede'
    async function login(email: string, password: string) {
        const data = {
            email,
            password
        }
        await axios.post('login', data).then(response => {
            setUser(response.data)

        }).catch(error => {
            // alert(`${error.response.data.error}`)
            //showModal(true)
            errorMessage = !error.response ? 'Houve um erro com a rede' : error.response.data.error
            setModalVisible(!modalVisible)
            //  AlertBoxConfirm({ title: 'Ops', textBtn: 'Ok', message: !error.response ? 'Houve um erro com a rede' : error.response.data.error, funcBtn1: () => { } })
        })

    }

    async function showModal(key: boolean) {
        setModalVisible(key)
    }

    async function clearUser() {
        setUser(null)
        await AsyncStorage.clear()
    }

    return (
        < AuthContext.Provider value={{ signed: !!user, user, login, clearUser, showModal, visibilityModal: modalVisible, errorMessageLogin: errorMessage }}>
            {children}
        </AuthContext.Provider >
    )

}

export default AuthContext