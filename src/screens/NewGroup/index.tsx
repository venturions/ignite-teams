import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'

export default function NewGroup() {
  const [groupName, setGroupName] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
      await groupCreate(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (err) {
      console.log(err)
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
