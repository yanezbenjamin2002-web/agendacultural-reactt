import PropTypes from 'prop-types'

function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fecha }) {
  const duracionNumero = Number(duracion)
  const duracionTexto = Number.isFinite(duracionNumero) && duracionNumero > 0 ? `${duracionNumero} min` : 'Sin duración'
  const tipoTexto = tipo || 'Sin tipo'
  const fechaTexto = fecha || 'Fecha no disponible'

  const estilosPorTipo = {
    Concierto: {
      border: '2px solid #8b5cf6',
      backgroundColor: '#f5f3ff',
      color: '#6d28d9',
      boxShadow: '0 2px 8px rgba(139, 92, 246, 0.2)'
    },
    Teatro: {
      border: '2px solid #dc2626',
      backgroundColor: '#fef2f2',
      color: '#b91c1c',
      boxShadow: '0 2px 8px rgba(220, 38, 38, 0.2)'
    },
    Exposición: {
      border: '2px solid #059669',
      backgroundColor: '#ecfdf5',
      color: '#047857',
      boxShadow: '0 2px 8px rgba(5, 150, 105, 0.2)'
    }
  }

  const estilo = estilosPorTipo[tipo] || {
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#222',
    boxShadow: 'none'
  }

  return (
    <article
      style={{
        border: estilo.border,
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: estilo.backgroundColor,
        boxShadow: estilo.boxShadow
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <h2 style={{ margin: 0, color: estilo.color }}>{nombre}</h2>
        <span style={{ padding: '4px 8px', borderRadius: '999px', backgroundColor: estilo.color, color: '#fff', fontSize: '0.8rem', fontWeight: '600' }}>
          {tipoTexto}
        </span>
      </div>
      <p style={{ margin: '6px 0' }}><strong>Lugar:</strong> {lugar}</p>
      <p style={{ margin: '6px 0' }}><strong>Duración:</strong> {duracionTexto}</p>
      <p style={{ margin: '6px 0' }}><strong>Fecha:</strong> {fechaTexto}</p>
      <p style={{ marginTop: '10px', marginBottom: 0 }}>{descripcion}</p>
    </article>
  )
}

EventoCard.propTypes = {
  nombre: PropTypes.string,
  lugar: PropTypes.string,
  duracion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tipo: PropTypes.string,
  descripcion: PropTypes.string,
  fecha: PropTypes.string
}

EventoCard.defaultProps = {
  nombre: 'Evento sin nombre',
  lugar: 'Lugar no informado',
  duracion: 0,
  tipo: 'Sin tipo',
  descripcion: 'Descripción no disponible',
  fecha: 'Fecha no disponible'
}

export default EventoCard

