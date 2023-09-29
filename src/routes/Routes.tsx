import { useState, useEffect } from 'react'

import { hasShownWelcomeScreen } from '../utils/AsyncStorageUtils'
import AllPages from './AllPages'
import MainNavigation from './MainNavigation'

export default function Routes() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>()

  useEffect(() => {
    hasShownWelcomeScreen().then((shown) => {
      if (shown) {
        setShowWelcomeScreen(false)
      } else {
        setShowWelcomeScreen(true)
      }
    })
  }, [])

  return <>{showWelcomeScreen === true ? <AllPages /> : <MainNavigation />}</>
}
