//index para definir as rotas para o usuário, usuários administrativos,
//rotas para definir acesso dentre outras
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes'

export function Routes(){
    return(       
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer> 
    )
}