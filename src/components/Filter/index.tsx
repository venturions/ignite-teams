import { TouchableOpacityProps } from 'react-native'
import { Container, FilterStyleProps, Title } from './styles'

interface Props extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, isActive = false, ...props }: Props) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
