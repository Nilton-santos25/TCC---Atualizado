//rotas para navegação ussando stack
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SingIn } from '../screens/Signin';
import { SignUp } from '../screens/SignUp';
import Profissionals from '../screens/Profissionals';

const {Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            headerMode="none" //tira o cabeçalho da tela de navegação
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}   
        >
            <Screen
                name="SignIn"
                component={SingIn}
            />  
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="SignUp"
                component={SignUp}
            />
            <Screen 
                name="Profissionals"
                component={Profissionals}
            />
        </Navigator>
    )
}