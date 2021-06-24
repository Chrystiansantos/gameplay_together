import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export function GuildIcon() {
  return (
    <Image source={{ uri: 'https://i.pinimg.com/originals/cd/3a/e3/cd3ae306e607763e3ba2eb9edf7df241.jpg' }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
