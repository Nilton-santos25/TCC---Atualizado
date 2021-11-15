import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.text500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },
    username: {
        fontFamily: theme.fonts.title800,
        fontSize: 24,
        color: theme.colors.heading
    },
    message: {
        fontSize: 16,
        fontFamily: theme.fonts.title800,
        color: theme.colors.heading,
    }
})