import { TextInput, TextInputProps } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'
import { RefObject } from 'react'

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...props }: InputProps) {
  const theme = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={theme!.COLORS.GRAY_300}
      {...props}
    />
  )
}
