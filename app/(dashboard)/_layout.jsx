import { Tabs } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../../constants/color'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Tabs 
        screenOptions={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor: theme.navBackground,
                paddingTop: 10,
                height: 90
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor
        }}
        

    >
        <Tabs.Screen name='profile' options={{title: 'Profile', 
            tabBarIcon:({focused}) =>(
            <FontAwesomeIcon 
            icon='fa-circle-user' 
            size={(focused) ? 27 : 23}
            color={(focused) ? theme.iconColorFocused : theme.iconColor }/>
        )
        }} />
        <Tabs.Screen name='books' options={{title: 'Books', tabBarIcon:({focused}) =>(
            <FontAwesomeIcon 
            icon='fa-book' 
            size={(focused) ? 27 : 23}
            color={(focused) ? theme.iconColorFocused : theme.iconColor }
            />
        )

        }} />
        <Tabs.Screen name='create' options={{title: 'Create', 
            tabBarIcon:({focused}) =>(
            <FontAwesomeIcon 
            icon='fa-book-open' 
            size={(focused) ? 27 : 23}
            transform={(focused) ? 'flip-h' :'' }
            color={(focused) ? theme.iconColorFocused : theme.iconColor }/>
        )
        }}/>
    </Tabs>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})