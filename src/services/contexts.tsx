import React, { createContext, useState, useEffect } from 'react'
import axios from './api'
import AsyncStorage from '@react-native-community/async-storage'
import userInterface from '../interfaces/userInterface'
const AuthContext = createContext<Provider>({} as Provider)

interface Provider {
    signed: boolean,
    user: userInterface | null
    login(email: string, password: string): Promise<void>
    clearUser(): void
    showModal(key: boolean): void,
    setDarkMode(key: boolean): void,
    visibilityModal: boolean,
    darkmode:boolean,
    errorMessageLogin: string
}


export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<userInterface | null>(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('Ops, verifique seu e-mail e senha ou se a rede esta ativada')
    const [darkmode, setdarkmode] = useState(true)
    async function login(email: string, password: string) {
        const data = {
            email,
            password
        }
        await axios.post('login', data).then(response => {
            setUser(response.data)

        }).catch(error => {

            setModalVisible(!modalVisible)
        })

    }

    async function showModal(key: boolean) {
        setModalVisible(key)
    }

    async function setDarkMode(value: boolean) {
        setdarkmode(value)
    }

    async function clearUser() {
        setUser(null)
        await AsyncStorage.clear()
    }

    return (
        < AuthContext.Provider value={{ signed: !!user, user, login, clearUser, showModal, visibilityModal: modalVisible, errorMessageLogin: errorMessage, setDarkMode,darkmode }}>
            {children}
        </AuthContext.Provider >
    )

}

export default AuthContext