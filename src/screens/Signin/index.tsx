import React from 'react'
import { 
    View, 
    Text,
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ilustration from '../../assets/ilustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SingIn() {
    const navigation = useNavigation();
    
    //função para a navegação das telas 
    function handleSignUp(){
        navigation.navigate('SignUp')
    }

    function handleHome(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Image 
                source={ilustration}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Me Contrata AÊ
                </Text>

                <Text style={styles.subtitle}>
                    Contrate os Melhores profissionais {'\n'} 
                    autônomos e liberais pagando o melhor preço!
                </Text>

                <ButtonIcon 
                    title="Entrar"
                    onPress={handleHome} //direciona para a tela através da funão criada
                />

                <View style={{marginTop: 15}}>
                    <ButtonIcon
                        title="Cadastrar-se"
                        onPress={handleSignUp} //direciona quando o botão é clicado
                    />
                </View>

            </View>
        </View>

    )
}