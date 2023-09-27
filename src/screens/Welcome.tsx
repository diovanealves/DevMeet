import { Text, View, Image } from 'react-native'
import PersonWelcome from '../assets/PersonWelcome.png'
import MyButton from '../components/MyButton'

export default function Welcome() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-2">
      <View className="space-y-1">
        <Text className="text-white text-4xl font-extrabold">
          Olá, Dev <Text className="text-orange">!</Text>
        </Text>
        <Text className="text-gray text-xl">
          Encontre o seu <Text className="bg-orange"> próximo </Text> evento de
          programação!
        </Text>
      </View>

      <Image
        source={PersonWelcome}
        alt="Imagem de um cara acessando a plataforma da DevMeet para encontrar o proximo evento de programação"
      />

      <MyButton
        icon="arrow-right"
        iconColor="#FFFFFF"
        iconSize={36}
        style="bg-orange px-3 py-2 rounded-lg"
      />
    </View>
  )
}
