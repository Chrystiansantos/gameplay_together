import React from 'react'
import { View, Image, Text } from 'react-native'
import { style } from './style'

import ilustratorImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native';
export function SignIn() {

  const { navigate } = useNavigation();

  const handleSignin = () => {
    navigate('Home')
  }

  return (
    <View style={style.container}>
      <Image style={style.image} resizeMode="stretch" source={ilustratorImg} />
      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas {'\n'}
        </Text>
        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon onPress={handleSignin} title="Entrar com Discord" />
      </View>

    </View>
  )
}