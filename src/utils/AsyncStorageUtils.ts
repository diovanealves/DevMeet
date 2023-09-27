import AsyncStorage from '@react-native-async-storage/async-storage'

async function hasShownWelcomeScreen() {
  try {
    const value = await AsyncStorage.getItem('hasShownWelcomeScreen')
    if (value) {
      return value
    }
    return null
  } catch (error) {
    console.log('Erro ao verificar se a tela de Boas-Vindas já foi exibida')
    return null
  }
}

async function markWelcomeScreenAsShow() {
  try {
    await AsyncStorage.setItem('hasShownWelcomeScreen', 'true')
  } catch (error) {
    console.log('Erro ao marcar a tela de Boas-Vindas como exibida')
    return null
  }
}

export { hasShownWelcomeScreen, markWelcomeScreenAsShow }
