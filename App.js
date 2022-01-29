import React from 'react'
import NoteState from './context/NoteState'
import { NavigationContainer } from '@react-navigation/native'
import RootStackScreen from './screens/Auth/RootStackScreen'

export default function App() {
  return (
    <NoteState>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </NoteState>
  )
}
