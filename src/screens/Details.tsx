import { Text, View } from 'react-native'
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

  console.log(eventsDetails)
  return (
    <View className="flex-1 items-center justify-center">
      <>
        <MyButton
          icon="arrow-left"
          iconColor="#FF5100"
          iconSize={24}
          onPress={() => navigation.navigate('Events', { id: categoryId })}
        />
      </>
    </View>
  )
}
