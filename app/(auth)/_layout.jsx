import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from "../../constants/color";


export default function AuthLayout(){
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return(
        <>
            <StatusBar style='auto' />
            <Stack screenOptions={{
                headerShown: false,
                //headerStyle: {backgroundColor: theme.navbackground },
                //headerTintColor: theme.title,
                animation: 'none'
                
                }}/>
                {/* <Stack.Screen   name='(auth)' options={{headerShown: false}}/>

                <Stack.Screen   name='index' options={{title:'Home'}}/> */}

        </>
  
    )
}