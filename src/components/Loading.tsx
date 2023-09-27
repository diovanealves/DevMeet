import { ActivityIndicator, View } from 'react-native'

export default function Loading() {
  return (
    <View className="h-screen items-center justify-center bg-background">
      <ActivityIndicator color="#FF5100" size={42} />
    </View>
  )
}
