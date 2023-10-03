import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native'

interface CardProps {
  icon: ImageSourcePropType
  title: string
  eventsCount: number
  style?: string
  onPress?: () => void
}

export default function Card({
  icon,
  title,
  eventsCount,
  style,
  onPress,
  ...rest
}: CardProps) {
  return (
    <TouchableOpacity
      className={`bg-white w-44 h-44 flex flex-col justify-between p-3 rounded-xl ${
        eventsCount > 0 ? 'opacity-100' : 'hidden'
      } ${style}`}
      onPress={onPress}
      {...rest}
    >
      <Image source={icon} alt={title} />
      <>
        <Text className="text-base font-bold">{title}</Text>
      </>

      {eventsCount > 0 ? (
        <Text className="flex text-orange font-bold">
          {eventsCount} <Text className="text-gray">encontrados</Text>
        </Text>
      ) : (
        <Text></Text>
      )}
    </TouchableOpacity>
  )
}
