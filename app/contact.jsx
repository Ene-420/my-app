import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const contact = () => {
  return (
    <View style={styles.container}>
    
          <Text style={styles.title}>contact page</Text>
    
            <Link href='/' style={styles.link}> Home </Link>
            <Link href='/about' style={styles.link}> About</Link>
        </View>
  )
}

export default contact

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