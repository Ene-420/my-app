import { Link } from 'expo-router'
import { Keyboard, StyleSheet, TouchableWithoutFeedback,} from 'react-native'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useState } from 'react'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'


 
const register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const  { register} = useUser()

    async function handleSubmit() {
        setError(null)

        try {
            await register(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer/>

            <ThemedText title={true} style={styles.title}>
                Register your Account
            </ThemedText>

            <ThemedTextInput 
                style={{width: '80%', marginBottom: 20}}
                placeholder="Email" 
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />
            <ThemedTextInput 
                style={{width: '80%', marginBottom: 20}}
                placeholder="Password" 
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <ThemedButton onPress={handleSubmit()} style={styles.link} >
                <ThemedText style={{fontSize: 23}}>
                    Register
                </ThemedText>
            </ThemedButton>

            <Spacer/>
            {error && <Text style={styles.error}>{error}</Text>}

            <Spacer height={100}/>
            <Link href='/login'>
                <ThemedText >
                    Login Instead
                </ThemedText>
            </Link>

        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default register

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30 
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

    },
    error:{
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10
    }
})