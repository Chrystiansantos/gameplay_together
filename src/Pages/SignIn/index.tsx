import React, { useState } from 'react'
import { View, Image, Text, StatusBar } from 'react-native'
import { style } from './style'

import ilustratorImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon'
export function SignIn() {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      <Image style={style.image} resizeMode="stretch" source={ilustratorImg} />
      <View style={style.content}>
        <Text style={style.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente</Text>
        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
      </View>

    </View>
  )
}