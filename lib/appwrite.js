import { Client, Account, Avatars } from 'react-native-appwrite'

const client = new Client()
        .setProject('69e6945e001a26e02d7f')
        .setPlatform('com.company.my-app')

export const account = new Account(client)
export const avatars = new Avatars(client)
