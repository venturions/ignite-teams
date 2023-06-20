import { TextInputProps } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

export function Input({ ...props }: TextInputProps) {
  const theme = useTheme()

  return <Container placeholderTextColor={theme!.COLORS.GRAY_300} {...props} />
}
