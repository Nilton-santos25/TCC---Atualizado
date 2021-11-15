import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        
        flexDirection: "row",
    },
    cardButton: {
        width: '100%',
        height: 126,
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.secondary60,
        marginBottom: 20

    },
    textCard: {
        color: theme.colors.heading,
        fontSize: 25,
        fontFamily: theme.fonts.title800,
    },
    description: {
        color: theme.colors.heading,
        fontSize: 13,
        fontFamily: theme.fonts.title600,
    },
    CardImage: {
        width: 150,
        height: 86,
    }
}) 