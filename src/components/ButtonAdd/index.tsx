import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export function ButtonAdd({...rest}: RectButtonProps){ //tipagem de maneira direta para o botão
    return(
        <RectButton
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.secondary}
                size={24}
            />
        </RectButton>

    )
}