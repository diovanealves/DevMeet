import { TouchableOpacity, Text, FlatList, Image } from 'react-native'

import { NavigationProps } from '../@types/navigation'
import { cardDataWithEventsCounts } from '../utils/MockCardData'

export default function Main({ navigation }: NavigationProps<'Main'>) {
  return (
    <FlatList
      className="bg-background"
      data={cardDataWithEventsCounts}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          className={`bg-white w-44 h-44 flex flex-col justify-between p-3 rounded-xl m-2 ${
            item.eventsCount > 0 ? '' : 'hidden'
          }`}
          onPress={() => navigation.navigate('Events', { events: item.events })}
        >
          <Image source={item.icon} alt={item.title} />

          <Text text-base font-bold>
            {item.title}
          </Text>

          <Text className="flex text-orange font-bold">
            {item.eventsCount} eventos{' '}
            <Text className="text-gray">encontrados</Text>
          </Text>
        </TouchableOpacity>
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 60,
        paddingHorizontal: 25,
        paddingBottom: 20,
      }}
    />
  )
}
