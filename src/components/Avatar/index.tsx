import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient' ;

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

//tipagem para o uso da imagem em outros locais do app
type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const {secondary100,secondary, secondary80 } = theme.colors

    return(
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary, secondary80 ]}
       >
           <Image 
            source={{ uri : urlImage }}
            style={styles.avatar}    
           />
       </LinearGradient> 
    )
}