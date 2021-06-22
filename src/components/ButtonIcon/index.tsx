import React from 'react'
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import DiscordImg from '../../assets/discord.png';

import { styles } from './styles'

interface IButtonIcon extends TouchableOpacityProps {
  title: string;
}

export function ButtonIcon({ title, ...rest }: IButtonIcon) {
  return (
    <TouchableOpacity style={styles.cotainer} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}