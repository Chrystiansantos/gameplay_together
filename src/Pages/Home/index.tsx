import React, { useState } from "react";
import { View } from 'react-native'
import { styles } from './styles'
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader'
import { FlatList } from "react-native-gesture-handler";
import { Appointments } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

export function Home() {
  const [category, setCategory] = useState<string>('')

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: 1,
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: '219387129387219387 12u 98dsakjfgahdkfgaksjhgdfjakshgdfsakjdlags'
    },
    {
      id: '2',
      guild: {
        id: 2,
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: '219387129387219387 12u 98dsakjfgahdkfgaksjhgdfjakshgdfsakjdlags'
    }
  ]

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" ></ListHeader>
        </View>
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointments data={item}></Appointments>
          )}
        ></FlatList>
      </View>
    </View >
  )
}
