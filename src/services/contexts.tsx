import React, { createContext, useState, useEffect } from 'react'
import axios from './api'
import AsyncStorage from '@react-native-community/async-storage'
import userInterface from '../interfaces/userInterface'


interface Provider {
    signed: boolean,
    user: userInterface | null
    login(email: string, password: string): Promise<void>
}

const AuthContext = createContext<Provider>({} as Provider)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<userInterface | null>(null)


    async function verifyPreferences() {
        const isSave = await AsyncStorage.getItem('@isSave')

    }

    async function login(email: string, password: string) {
        const data = {
            email,
            password
        }
        await axios.post('login', data).then(response => {
            setUser(response.data)

        }).catch(error => {
            alert(`${error.response.data.error}`)
        })

    }

    return (
        < AuthContext.Provider value={{ signed: !!user, user, login }}>
            {children}
        </AuthContext.Provider >
    )

}

export default AuthContext