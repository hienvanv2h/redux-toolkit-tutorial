import { useState } from 'react'
import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IceCreamView } from './features/icecream/IceCreamView'
import { UserView } from './features/user/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </>
  )
}

export default App
