import { Text, View, Linking, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/Feather'
import { NavigationProps } from '../@types/navigation'
import MyButton from '../components/MyButton'
import { cardDataWithEventsCounts as MockEvents } from '../utils/MockCardData'

export default function Details({
  navigation,
  route,
}: NavigationProps<'Details'>) {
  const { categoryId, eventId } = route.params

  const categoryDetails = MockEvents.find(
    (category) => category.id === categoryId,
  )
  const eventsDetails = categoryDetails?.events.find(
    (event) => event.id === eventId,
  )

  function handleOpenLink() {
    Linking.openURL(eventsDetails?.link || '').catch((error) =>
      console.error(error),
    )
  }

  console.log(eventsDetails)
  return (
    <View className="bg-background flex-1 p-5 space-y-4">
      <View className="flex flex-row items-center justify-between py-12">
        <View className="inline ">
          <Text className="text-orange text-xl font-black">
            {eventsDetails?.date}
          </Text>
          <Text className="text-orange text-lg font-medium">
            {eventsDetails?.hour}
          </Text>
        </View>
        <MyButton
          icon="arrow-left"
          iconColor="#C6C6C6"
          iconSize={20}
          title="Voltar"
          styleText="text-base text-gray"
          style="flex flex-row items-center gap-1"
          onPress={() => navigation.navigate('Events', { id: categoryId })}
        />
      </View>

      <Text className="text-white text-3xl font-bold">
        {eventsDetails?.name}
      </Text>

      <Text className="text-description text-base">
        {eventsDetails?.description}
      </Text>

      <Text className="text-white">
        Organizado por:{' '}
        <Text className="font-bold">{eventsDetails?.organizer}</Text>
      </Text>

      <Text className="mx-auto text-white text-2xl font-bold pt-10 pb-5">
        Link do Evento
      </Text>

      <View className="bg-[#323232] flex flex-row items-center justify-between p-3 rounded-md">
        <Text className="text-white">{eventsDetails?.link}</Text>
        <TouchableOpacity
          className="h-7 w-7 bg-[#04D361]/20 items-center justify-center rounded-lg"
          onPress={handleOpenLink}
        >
          <AntDesign name="arrow-right" color="#04D361" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
