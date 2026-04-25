import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/color'

const about = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>

      <Text style={styles.title}>about page</Text>

        <Link href='/' style={styles.link}> Back </Link>
        <Link href='/contact' style={styles.link}> Contact</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        fontWeight: 'bold',
        fontSize: 30

    },
    link:{
        marginVertical: 10,
        borderBottomWidth: 1,
    }

})