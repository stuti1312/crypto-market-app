import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigatior from './src/routes/Stack'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigatior />
    </NavigationContainer>
  )
}

export default App