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

    const  { register} = useUser()

    async function handleSubmit() {
        try {
            await register(email, password)
        } catch (error) {
            console.log(error.message)
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

            <ThemedButton onPress={handleSubmit()} >
                <ThemedText>
                    Register
                </ThemedText>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href='/login'>
                <ThemedText style={{textAlign: 'center'}}>
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
    }
})