import { View } from 'react-native'
import { styled } from 'styled-components'

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 24px;
`
