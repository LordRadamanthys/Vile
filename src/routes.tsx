import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './pages/Login'
import Subscribe1 from './pages/Subscribe/subscribe1'
import Subscribe2 from './pages/Subscribe/subscribe2'
import Home from './pages/Home/home'
import { Easing } from 'react-native';
const AppStack = createStackNavigator()



const Routes = () => {
    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    const closeConfig = {
        animation: 'timing',
        config: {
            duration: 200,
            easing: Easing.linear
        }
    }
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={
                    {
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                        // transitionSpec: {
                        //     open: config,
                        //     close: closeConfig,
                        // }
                    }
                }
            >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Subscribe1" component={Subscribe1} />
                <AppStack.Screen name="Subscribe2" component={Subscribe2} />
                <AppStack.Screen name="Home" component={Home} />
            </AppStack.Navigator>
        </NavigationContainer >
    )
}

export default Routes