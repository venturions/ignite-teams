import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export default function NewGroup() {
  const [groupName, setGroupName] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await groupCreate(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Novo Grupo', err.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo.')
        console.log(err)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon name="group" />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroupName} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}
