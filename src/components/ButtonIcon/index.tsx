import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; //botão melhor para se ultilizar em aplicações
import { Text, View, } from 'react-native'

import { styles } from './styles'

//criando uma tipagem para usar o componente botão em outros locais do app,
//passando apenas a propriedade title
// TouchableOpacityProps pega todas as propiedades do elemento botão 
// ...rest pega todas as propiedade e insere nos botões
type Props = RectButtonProps & {
    title: string
}

export function ButtonIcon({title, ...rest } : Props) {
    return(
        <View>
            <RectButton 
                style={styles.container}
                {...rest}
            >
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </RectButton>
        </View>
    )
}