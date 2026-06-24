import { useEffect } from 'react'
import { eventos } from './data/eventos'
import ListaEventos from './components/ListaEventos'
import './App.css'

function App() {
  useEffect(() => {
    console.log('Eventos cargados:', eventos)
  }, [])

  return (
    <main className="app">
      <h1>Agenda Cultural</h1>
      <p>Eventos disponibles:</p>
      <ListaEventos eventos={eventos} />
    </main>
  )
}

export default App
