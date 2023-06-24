import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from './storageConfig'

export async function groupCreate(newGroupName: string) {
  try {
    await AsyncStorage.setItem(GROUP_COLLECTION, newGroupName)
  } catch (err) {
    throw err
  }
}
