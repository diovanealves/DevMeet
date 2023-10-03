import { Text, FlatList } from 'react-native'

import { NavigationProps } from '../@types/navigation'
import Card from '../components/Card'
import { cardDataWithEventsCounts } from '../utils/MockCardData'

export default function Main({ navigation }: NavigationProps<'Main'>) {
  return (
    <FlatList
      className="bg-background"
      data={cardDataWithEventsCounts}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          icon={item.icon}
          title={item.title}
          eventsCount={item.eventsCount}
          onPress={() => {
            item.eventsCount > 0 && navigation.navigate('Events')
          }}
          style="mb-2 mr-2"
        />
      )}
      ListHeaderComponent={
        <>
          <Text className="text-3xl text-white font-bold mb-4">
            Que tipo de evento você procura?
          </Text>
          <Text className="text-xl text-gray font-medium mb-6">
            Selecione a categoria que mais te agrada!
          </Text>
        </>
      }
      contentContainerStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        paddingBottom: 20,
      }}
    />
  )
}
