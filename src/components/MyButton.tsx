import AntDesign from 'react-native-vector-icons/Feather'
import { Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title?: string
  styleText?: string
  style?: string
  icon?: string
  iconColor?: string
  iconSize?: number
  onPress?: () => void
}

export default function MyButton({
  title,
  styleText,
  style,
  icon,
  iconColor,
  iconSize,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity className={style} onPress={onPress} {...rest}>
      {icon && <AntDesign name={icon} color={iconColor} size={iconSize} />}
      {title && <Text className={styleText}>{title}</Text>}
    </TouchableOpacity>
  )
}
