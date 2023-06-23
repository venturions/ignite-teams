import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Logo } from './styles'
import LogoImg from '@assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon name="chevron-left" color="#FFF" size={32} />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  )
}
