import { View, Text, FlatList } from 'react-native'

import { NavigationProps } from '../@types/navigation'
import Card from '../components/Card'
import { cardData } from '../utils/MockCardData'
import MyButton from '../components/MyButton'

export default function Main({ navigation }: NavigationProps<'Main'>) {
  return (
    <View className="flex-1 pt-20 px-8 space-y-5 bg-background">
      <Text className="text-3xl text-white font-bold">
        Que tipo de evento você procura?
      </Text>
      <Text className="text-xl text-gray font-medium">
        Selecione a categoria que mais te agrada!
      </Text>

      <FlatList
        data={cardData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            icon={item.icon}
            title={item.title}
            events={item.events}
            style="mr-2 mb-2"
          />
        )}
      />

      <MyButton icon="arrow-right" iconSize={24} />
    </View>
  )
}
