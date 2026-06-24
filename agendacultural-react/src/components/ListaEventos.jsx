import PropTypes from 'prop-types'
import EventoCard from './EventoCard'

function ListaEventos({ eventos }) {
  return (
    <section>
      {eventos.map((evento) => (
        <EventoCard
          key={evento.id}
          nombre={evento.nombre}
          lugar={evento.lugar}
          duracion={evento.duracion}
          tipo={evento.tipo}
          descripcion={evento.descripcion}
          fecha={evento.fechas?.join(', ') || 'Fecha no disponible'}
          esGratuito={evento.esGratuito}
        />
      ))}
    </section>
  )
}

ListaEventos.propTypes = {
  eventos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nombre: PropTypes.string,
      lugar: PropTypes.string,
      duracion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      tipo: PropTypes.string,
      descripcion: PropTypes.string,
      fechas: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
}

ListaEventos.defaultProps = {
  eventos: []
}

export default ListaEventos
