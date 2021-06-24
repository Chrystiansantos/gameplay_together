import React from 'react'
import { ScrollView } from 'react-native'

import { categories } from '../../utils/categories'
import { styles } from './styles'

import { Category } from '../Category'

interface ICategorySelectProps {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: ICategorySelectProps) {

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category key={category.id} title={category.title} icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  )
}
