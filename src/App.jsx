import { useState } from 'react'
import Restaurant from './components/Restaurant'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Restaurant/>
    </>
  )
}

export default App
