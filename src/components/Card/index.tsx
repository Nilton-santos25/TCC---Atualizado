import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'

type Props = RectButtonProps & {
    title: string;
    description: string;
    thumbnail: string;
}


export function Card({title, thumbnail, description, ...rest}: Props){
    return(
        <View style={styles.container}>
            <RectButton
                style={styles.cardButton}
                {...rest}
            >
                <View>
                    <Text
                        style={styles.textCard}
                    >
                        {title}
                    </Text>  

                    <Text
                        style={styles.description}
                    >
                        {description}  
                    </Text> 
                </View>

                <Image 
                    style={styles.CardImage}
                    source={{ uri: thumbnail}}
                    resizeMode="contain"
            
                /> 
            </RectButton>            
        </View>
    )
    
}