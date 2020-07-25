import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FeedVideos from './pages/HomeVideos/feedVideos'
import Home from './pages/Home/home'
import Profile from './pages/User/profile'

import { MaterialIcons as Icon } from '@expo/vector-icons'
const Tab = createMaterialBottomTabNavigator();


function BottomMenu(value:any) {
    //const data = value.route.params.data
    return (
        <Tab.Navigator

            initialRouteName='Home'
            backBehavior='initialRoute'
            activeColor="#fff"
            inactiveColor="#3e2465"
            shifting={true}
            barStyle={{
                borderWidth: 0.5,
                shadowColor: 'rgba(186, 186, 186, 0.25)',
                shadowOffset: { width: 90, height: 40 },
                shadowOpacity: 3,
                shadowRadius: 20,
                elevation: 30
            }}
        >
            <Tab.Screen name="Home" component={Home}  options={{ tabBarIcon: () => (<Icon name="home" size={28} color="#fff" />), tabBarColor: '#FFB800', }} />
            <Tab.Screen name="FeedVideos" component={FeedVideos}  options={{ tabBarIcon: () => (<Icon name="movie" size={28} color="#fff" />), tabBarColor: '#FFC633', }} />
            <Tab.Screen name="Profile" component={Profile}  options={{ tabBarIcon: () => (<Icon name="person" size={28} color="#fff" />), tabBarColor: '#FFB800', }} />
        </Tab.Navigator>
    );
}

export default BottomMenu
