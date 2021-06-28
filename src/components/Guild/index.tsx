import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../GuildIcon'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export interface IGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean
}

interface IGuildProps extends TouchableOpacityProps {
  data: IGuild
}
export const Guild = ({ data, ...rest }: IGuildProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}>
      <GuildIcon></GuildIcon>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
      </View>
      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}