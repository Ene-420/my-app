import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/color'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { NodeBuilderFlags } from 'typescript'


 
const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login } = useUser()

     async function handleSubmit() {
        setError(null)

        try {
            await login(email, password)
        } catch (error) {
            setError(error.message)
    
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer/>

            <ThemedText title={true} style={styles.title}>
                Login to your Account
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

            <ThemedButton onPress={() => {handleSubmit()} } style={styles.link}>
                <ThemedText style={{fontSize: 23}}> Login</ThemedText>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href='/register'>
                <ThemedText>
                    Register Instead
                </ThemedText>
            </Link>

            <Spacer/>
            {error && <Text style={styles.error}>{error}</Text>}

        </ThemedView>

    </TouchableWithoutFeedback>
    
  )
}

export default login

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
    btn:{
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5
    },
    pressed:{
        opacity: 0.8
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