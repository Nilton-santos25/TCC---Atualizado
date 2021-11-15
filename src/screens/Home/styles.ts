import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper' // biblioteca para não cortar a parte superior do iphone

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    }
});