import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'; 

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

//criando uma tipagem para envolver as interfaces com o gradiente
type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    const { secondary100, secondary80, secondary } = theme.colors 

    return (
       <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary, secondary80 ]}
       >
           {children}
       </LinearGradient> 
    )
}