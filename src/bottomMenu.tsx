import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Subscribe1 from './pages/Subscribe/subscribe1'
import Home from './pages/Home/home'
import NewsDetails from './pages/News/newsDetails'
import { MaterialIcons as Icon } from '@expo/vector-icons'
const Tab = createMaterialBottomTabNavigator();

function BottomMenu() {
    return (
        <Tab.Navigator

            initialRouteName='Home'
            activeColor="#fff"
            inactiveColor="#3e2465"
            shifting={true}
            barStyle={{
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 90, height: 40 },
                shadowOpacity: 3,
                shadowRadius: 20,
                elevation: 30
            }}
        >
            <Tab.Screen name="NewsDetails" component={NewsDetails} options={{ tabBarIcon: () => (<Icon name="person" size={28} color="#fff" />), tabBarColor: '#FFC633', }} />
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => (<Icon name="home" size={28} color="#fff" />), tabBarColor: '#FFB800', }} />
            <Tab.Screen name="Subscribe1" component={Subscribe1} options={{ tabBarIcon: () => (<Icon name="person" size={28} color="#fff" />), tabBarColor: '#FFC633', }} />
        </Tab.Navigator>
    );
}

export default BottomMenu

// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';

// export default class BottomMenu extends React.Component {
//     state = {
//         index: 1,
//         routes: [
//             { key: 'Home', title: 'Home', icon: 'home', color: '#FFC633',backgroundColor:'#FFC633' },
//             { key: 'teste1', title: 'Albums', icon: 'album' ,  color: '#FFC633'},
//             { key: 'teste', title: 'Recents', icon: 'history' ,  color: '#FFC633'},
//         ],
//     };

//     _handleIndexChange = (index: any) => this.setState({ index });

//     _renderScene = BottomNavigation.SceneMap({
//         Home: Home,
//         teste: Subscribe1,
//         teste1: Subscribe2,
//     });

//     render() {
//         return (
//             <BottomNavigation
//                 navigationState={this.state}
//                 onIndexChange={this._handleIndexChange}
//                 renderScene={this._renderScene}
//             />
//         );
//     }
// }