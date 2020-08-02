import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './pages/Login'
import BottomMenu from './bottomMenu'
import Subscribe1 from './pages/Subscribe/subscribe1'
import Subscribe2 from './pages/Subscribe/subscribe2'
import NewsDetails from './pages/News/newsDetails'
import AuthContext from './services/contexts'
const AppStack = createStackNavigator()



const Routes = () => {
    const {signed} = useContext(AuthContext)

    return (!signed?
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
            </AppStack.Navigator>
        </NavigationContainer >
        :
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
                <AppStack.Screen name="BottomMenu" component={BottomMenu} />
                <AppStack.Screen name="NewsDetails" component={NewsDetails} />
            </AppStack.Navigator>
        </NavigationContainer >
    )
}

export default Routes