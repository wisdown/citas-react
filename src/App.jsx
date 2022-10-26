import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='conatiner mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
