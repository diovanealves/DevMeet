import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native'

interface CardProps {
  icon: ImageSourcePropType
  title: string
  events: string
  style?: string
  onPress?: () => void
}

export default function Card({
  icon,
  title,
  events,
  style,
  onPress,
  ...rest
}: CardProps) {
  return (
    <TouchableOpacity
      className={`bg-white w-44 h-44 flex flex-col justify-between p-3 rounded-xl ${style}`}
      onPress={onPress}
      {...rest}
    >
      <Image source={icon} alt={title} />
      <>
        <Text className="text-base font-bold">{title}</Text>
      </>
      <Text className="flex text-orange font-bold">
        {events} <Text className="text-gray">encontrados</Text>
      </Text>
    </TouchableOpacity>
  )
}
