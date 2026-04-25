import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/color'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style,safe=false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const insets = useSafeAreaInsets()

  return ( (safe) ? 

    <View 
        style={[{
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }, style]}
        {...props}/>    
    : 
    <View style={[{backgroundColor: theme.background}, style]}
        {...props}/>

    
  )
}

export default ThemedView

