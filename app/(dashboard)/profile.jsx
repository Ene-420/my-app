import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'


const Profile = () => {

    const { user,logout } = useUser()

  return (
    <ThemedView style={styles.container}>

        <ThemedText title={true} style={styles.heading}>
            {user.email |'Hello'}
        </ThemedText>

        <Spacer/>
        <ThemedText>Time to start reading some books... </ThemedText>

        <ThemedButton onPress={logout} style={styles.link}>
            <ThemedText > Logout</ThemedText>
        </ThemedButton>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
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