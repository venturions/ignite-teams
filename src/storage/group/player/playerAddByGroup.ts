import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlayerStorageDTO } from './playerStorageDTO'
import { PLAYER_COLLECTION } from '../storageConfig'
import { playersGetByGroup } from './playersGetByGroup'
import { AppError } from '@utils/AppError'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await playersGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    )

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já esta adicionada em um time aqui.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
