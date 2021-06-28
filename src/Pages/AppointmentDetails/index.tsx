import React from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import banner from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { theme } from '../../global/styles/theme'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

import { styles } from './style'

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      userName: 'Chrystian',
      avatar_url: 'https://avatars.githubusercontent.com/u/33062949?v=4',
      status: 'online'
    },
    {
      id: '2',
      userName: 'Chrystian',
      avatar_url: 'https://avatars.githubusercontent.com/u/33062949?v=4',
      status: 'offiline'
    }
  ]
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            >
            </Fontisto>
          </BorderlessButton>
        }
      ></Header>
      <ImageBackground
        source={banner}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 13"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
        renderItem={({ item }) => (

          <Member data={item}></Member>

        )}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida"></ButtonIcon>
      </View>

    </Background >
  )
}
