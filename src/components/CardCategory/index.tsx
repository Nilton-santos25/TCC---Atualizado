import React from 'react';
import { ScrollView } from 'react-native'; // é usada para ativar rolagem 
import { useNavigation } from '@react-navigation/native';


import { styles } from './styles';
import { Card } from '../Card';

export function CardCategory(){
    const navigation = useNavigation();
    
    //função para a navegação das telas 
    function handlePedreiros(){
        navigation.navigate('Profissionals')
    }

    return(
            <ScrollView
                style={styles.container}  
                showsHorizontalScrollIndicator={true}  
                contentContainerStyle={{ paddingRight: 20 }}
            >
                <Card 
                    title='Pedreiros' 
                    thumbnail="https://i.pinimg.com/originals/67/ff/4f/67ff4fd5071fd1e1e42d93012ef733e5.png"
                    description="Construção e Reformas" 
                    onPress={handlePedreiros} 
                      
                />
                <Card 
                    title='Encanadores' 
                    thumbnail="https://static.wixstatic.com/media/17e51c_a5aeaefb2b3148f6af78c52ed257a17e~mv2.png/v1/crop/x_0,y_0,w_360,h_480,q_85,usm_2.00_1.00_0.00/17e51c_a5aeaefb2b3148f6af78c52ed257a17e~mv2.webp"
                    description="Construção e Reformas"    
                />
                <Card 
                    title='Eletricistas' 
                    thumbnail="https://cdn.pixabay.com/photo/2018/04/11/02/44/electrician-3309404_960_720.png"
                    description="Construção e Reformas"    
                />
                <Card 
                    title='Pintores' 
                    thumbnail="https://www.seekpng.com/png/full/293-2937178_pintor-png-imagem-de-pintor-png.png"
                    description="Construção e Reformas"    
                />
                <Card 
                    title='Engenheiros' 
                    thumbnail="https://lh3.googleusercontent.com/proxy/I7i6JaVUOKPOQ5Q9KpCZmlqNuYCYvXy1p9EgL_S7HtT3RA3moCZ0tgfCzQ_HD-AUB2zcV-fSPi8pgf3a89SLNRGe3wXDCVpfIa_9y9Kmtapgputl"
                    description="Construção e Reformas"    
                />
                <Card 
                    title='Arquitetos' 
                    thumbnail="https://image.flaticon.com/icons/png/512/2132/2132752.png"
                    description="Construção e Reformas"    
                />
                <Card 
                    title='Dentistas' 
                    thumbnail="https://www.iro.com.br/site/wp-content/uploads/2020/06/dentista.png"
                    description="Saúde"    
                />
                <Card 
                    title='Médicos' 
                    thumbnail="https://missaocovid.com.br/static/media/sectipn-one.a7795d40.png"
                    description="Saúde"    
                />
                <Card 
                    title='Dermatologistas' 
                    thumbnail="https://lh3.googleusercontent.com/proxy/Tt6xRqfXi7hoVMgbkK_0oD7bsF9pjSrU8EKep3u2nfFT00yCVcw-Cycco1zssYLuLm-jL2aUR6NN16v30MTAl8N67N9KMHw2oaneVW8fV0qJn07PywiCOEpnQA"
                    description="Saúde e Beleza"    
                />  
                <Card 
                    title='Manicure' 
                    thumbnail="https://florescerespaco.com.br/wp-content/uploads/2020/08/img-manicure.png"
                    description="Estética e Beleza"    
                />  

            </ScrollView>
    )
}