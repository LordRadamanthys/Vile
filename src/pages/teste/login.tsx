import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Asset, AppLoading } from 'expo'

const Login = () => {

    const [isReady, setIsReady] = useState(false)


    function cacheImages(images: any) {
        return images.map((image: any) => {
            if (typeof image === 'string') {
                return Image.prefetch(image)
            } else {
                return Asset.formModule(image).dowloadAsync()
            }
        })
    }

    async function _loadAssetsAsync() {
        const imagesAssets = cacheImages([
            require('../../assets/fin.png')
        ])

        await Promise.all([...imagesAssets])
    }

    if (!isReady) {
        return (
            <AppLoading
                startAsync={_loadAssetsAsync}
                onFinish={() => setIsReady(true)}
            />
        )
    }

    return (
        <View></View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {

    }
})