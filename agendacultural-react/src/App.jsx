import { useEffect } from 'react'
import { eventos } from './data/eventos'
import './App.css'

function App() {
  useEffect(() => {
    console.log('Eventos cargados:', eventos)
  }, [])

  return (
    <main className="app">
      <h1>Agenda Cultural</h1>
      <p>Eventos disponibles:</p>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            <strong>{evento.nombre}</strong>
            <br />
            Tipo: {evento.tipo} | Lugar: {evento.lugar}
            <br />
            {evento.descripcion}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
