import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Guild, IGuild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { styles } from './styles'

interface IGuildsProps {
  handleGuildsSelected: (guild: IGuild) => void
}

export const Guilds = ({ handleGuildsSelected }: IGuildsProps) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    {
      id: '2',
      name: 'Aoba',
      icon: null,
      owner: false
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        renderItem={({ item }) => (
          <Guild
            onPress={() => handleGuildsSelected(item)}
            data={item}></Guild>
        )}
      >
      </FlatList>
    </View>
  )
}