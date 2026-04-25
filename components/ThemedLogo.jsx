import { Image, useColorScheme} from 'react-native'
import { StyleSheet } from 'react-native'
import Darkmode from '../assets/dark-mode.png'
import Lightmode from '../assets/light-mode.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme ==='dark' ? Darkmode: Lightmode

    return (
    <Image source={logo} {...props} style={styles.img} />
  )

}

export default ThemedLogo


const styles= StyleSheet.create({

    // img:{
    //    Width: '150%',
       
    //    height: '10%'
    // }

})