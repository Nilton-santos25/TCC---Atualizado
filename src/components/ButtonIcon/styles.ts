import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.heading,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    buttonText: {
        flex: 1,
        color: theme.colors.secondary,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: theme.fonts.title600,
    }
})