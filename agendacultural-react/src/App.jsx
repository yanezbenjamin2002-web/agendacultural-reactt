import { useEffect } from 'react'
import { eventos } from './data/eventos'
import EventoCard from './components/EventoCard'
import './App.css'

function App() {
  useEffect(() => {
    console.log('Eventos cargados:', eventos)
  }, [])

  return (
    <main className="app">
      <h1>Agenda Cultural</h1>
      <p>Eventos disponibles:</p>
      <section>
        {eventos.map((evento) => (
          <EventoCard
            key={evento.id}
            nombre={evento.nombre}
            lugar={evento.lugar}
            duracion={evento.duracion}
            tipo={evento.tipo}
            descripcion={evento.descripcion}
            fecha={evento.fechas.join(', ')}
          />
        ))}
      </section>
    </main>
  )
}

export default App
