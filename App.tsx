import React from 'react';
import { StatusBar } from 'react-native'
import { Inter_400Regular, Inter_500Medium }  from '@expo-google-fonts/inter';
import { Nunito_600SemiBold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';//carrega fontes no dispositivo do usuário

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
	/*importar as fontes para o dispositivo do usuário 
	antes da aplicação ser iniciada*/
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Nunito_600SemiBold,
		Nunito_800ExtraBold
	});
	/* não abre o App enquanto a fonte não forem carregadas
	para fazer isso instalar a biblioteca -- expo install expo-app-loading*/
	if(!fontsLoaded) {

		return <AppLoading />
	}

	return(
		<Background>
			<StatusBar 
				barStyle="dark-content" 
				backgroundColor="transparent"
				translucent
			/>
			 <Routes /> 
		</Background>
  	);
}	