import { BackButton, BackIcon, Container, Logo } from './styles'
import LogoImg from '@assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon color="#FFF" size={32} />
        </BackButton>
      )}
      <Logo source={LogoImg}></Logo>
    </Container>
  )
}
