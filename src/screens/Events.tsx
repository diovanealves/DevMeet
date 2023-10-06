import { FlatList, View, Text } from 'react-native'
import { NavigationProps } from '../@types/navigation'
import MyButton from '../components/MyButton'
import { cardDataWithEventsCounts as MockEvents } from '../utils/MockCardData'
import { EventsProps } from '../interface/Events'

export default function Events({
  route,
  navigation,
}: NavigationProps<'Events'>) {
  const { id } = route.params
  let eventsData: EventsProps[] = []

  const categoriesData = MockEvents.find((Events) => Events.id === id)
  if (categoriesData) {
    eventsData = categoriesData.events
  }

  return (
    <FlatList
      className="bg-background"
      data={eventsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View key={item.id} className="bg-white space-y-2 p-4 rounded-xl my-4 ">
          <Text className="flex">
            <Text className="text-orange font-bold"> {item.date}</Text>
            <Text className="text-background font-bold"> - </Text>
            <Text className="text-orange"> {item.hour}</Text>
          </Text>

          <Text className="text-xl text-background font-bold">{item.name}</Text>
          <Text className="text-description">{item.description}</Text>

          <View className="flex flex-row items-center justify-between">
            <Text>
              Organizado por:{' '}
              <Text className="font-bold">{item.organizer}</Text>
            </Text>
            <>
              <MyButton
                icon="arrow-right"
                iconColor="#FF5100"
                iconSize={24}
                onPress={() =>
                  navigation.navigate('Details', {
                    categoryId: id,
                    eventId: item.id,
                  })
                }
              />
            </>
          </View>
        </View>
      )}
      ListHeaderComponent={
        <View className="flex flex-row items-start justify-between mb-4">
          <View>
            <Text className="text-white text-3xl font-bold mb-3">
              Eventos disponíveis
            </Text>
            <Text className="text-base text-gray">
              Selecione o evento desejado.
            </Text>
            <Text className="text-base text-gray">E espere sua data!</Text>
          </View>
          <View>
            <MyButton
              icon="arrow-left"
              iconColor="#C6C6C6"
              iconSize={20}
              title="Voltar"
              styleText="text-base text-gray"
              style="flex flex-row items-center gap-1"
              onPress={() => navigation.navigate('Main')}
            />
          </View>
        </View>
      }
      contentContainerStyle={{
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
      }}
    />
  )
}
