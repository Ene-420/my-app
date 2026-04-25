import { StyleSheet, Text, View, Image } from 'react-native'
import  {Link} from 'expo-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen'


library.add(fab, faBook, faCircleUser, faBookOpen )


import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo  />

      <Spacer/>
      <ThemedText style={styles.title} title={true}>Welcome !!!</ThemedText>

      <Spacer/>
      <ThemedText></ThemedText>

    
      {/* <View style={styles.card}>
        <ThemedText> Hello, this is a card </ThemedText>
      </View> */}

      <Link href='/login' style={styles.link}> 
        <ThemedText style={styles.text}>Login page </ThemedText>
      </Link>
      <Link href='/register' style={styles.link}> 
        <ThemedText style={styles.text}>Register page </ThemedText>
      </Link>

      <Link href='/profile' style={styles.link}> 
        <ThemedText style={styles.text}>Profile page </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        fontWeight: 'bold',
        fontSize: 40
    },
    card:{
      //backgroundColor: '#e5e554',
      padding: 8,
      borderRadius: 10,
      boxShadow: '4px 4px rgba(0,0,0,0.1)',
      margin: 10
    },
    text:{
      fontSize: 25,
      fontWeight: '700'
    },

    img:{
        marginVertical: 20
    },
       link:{
        marginVertical: 30,
        borderWidth: 0.5,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#0c4ed198',
        borderRadius: 15

    }
})