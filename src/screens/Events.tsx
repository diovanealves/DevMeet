import { FlatList, View, Text } from 'react-native'
import { NavigationProps } from '../@types/navigation'
import MyButton from '../components/MyButton'

export default function Events({
  route,
  navigation,
}: NavigationProps<'Events'>) {
  const { events } = route.params

  return (
    <FlatList
      className="bg-background"
      data={events}
      numColumns={2}
      renderItem={({ item }) => (
        <View
          key={item.id}
          className="w-full bg-white space-y-2 p-4 rounded-xl my-4"
        >
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
              <MyButton icon="arrow-right" iconColor="#FF5100" iconSize={24} />
            </>
          </View>
        </View>
      )}
      ListHeaderComponent={
        <View className="w-full flex flex-row items-start justify-between mb-4">
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
