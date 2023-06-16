import { ActivityIndicator, View } from 'react-native'
import { styled } from 'styled-components'

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
}))``
