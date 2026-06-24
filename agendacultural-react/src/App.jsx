import { useEffect, useState } from 'react'
import { eventos } from './data/eventos'
import ListaEventos from './components/ListaEventos'
import FiltroTipo from './components/FiltroTipo'
import './App.css'

function App() {
  const [filtroTipo, setFiltroTipo] = useState('todos')
  const [busqueda, setBusqueda] = useState('')

  const manejarCambioBusqueda = (valor) => {
    const textoNormalizado = valor.slice(0, 30)
    setBusqueda(textoNormalizado)
  }

  useEffect(() => {
    console.log('Eventos cargados:', eventos)
  }, [])

  const normalizarTexto = (valor = '') =>
    valor
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  const eventosFiltrados = eventos.filter((evento) => {
    const tipoCoincide =
      filtroTipo === 'todos' || normalizarTexto(evento.tipo) === filtroTipo
    const texto = normalizarTexto(busqueda.trim())
    const textoCoincide =
      texto === '' ||
      [evento.nombre, evento.lugar, evento.descripcion, evento.tipo]
        .some((valor) => normalizarTexto(valor).includes(texto))

    return tipoCoincide && textoCoincide
  })

  const mostrarMensaje = eventosFiltrados.length === 0 && (busqueda.trim() !== '' || filtroTipo !== 'todos')
  const eventosGratis = eventos.filter((evento) => evento.esGratuito).length

  return (
    <main className="app">
      <h1>Agenda Cultural</h1>
      <p><strong>Eventos disponibles:</strong> {eventosFiltrados.length}</p>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => manejarCambioBusqueda(e.target.value)}
        placeholder="Buscar evento"
        style={{ padding: '8px 12px', marginBottom: '12px', width: '100%', maxWidth: '320px' }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <FiltroTipo filtroActual={filtroTipo} onCambiarFiltro={setFiltroTipo} />
        <p style={{ margin: 0 }}><strong>Eventos gratuitos:</strong> {eventosGratis}</p>
      </div>

      {mostrarMensaje ? (
        <p>No hay eventos que coincidan</p>
      ) : (
        <ListaEventos eventos={eventosFiltrados} />
      )}
    </main>
  )
}

export default App
