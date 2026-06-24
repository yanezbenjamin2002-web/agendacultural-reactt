import PropTypes from 'prop-types'

function FiltroTipo({ filtroActual, onCambiarFiltro }) {
  const opciones = [
    { label: 'Todos', value: 'todos' },
    { label: 'concierto', value: 'concierto' },
    { label: 'teatro', value: 'teatro' },
    { label: 'exposicion', value: 'exposicion' }
  ]

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
      {opciones.map((opcion) => {
        const activo = filtroActual === opcion.value

        return (
          <button
            key={opcion.value}
            type="button"
            onClick={() => onCambiarFiltro(opcion.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '999px',
              border: activo ? '1px solid #6d28d9' : '1px solid #ccc',
              backgroundColor: activo ? '#6d28d9' : '#fff',
              color: activo ? '#fff' : '#333',
              cursor: 'pointer'
            }}
          >
            {opcion.label}
          </button>
        )
      })}
    </div>
  )
}

FiltroTipo.propTypes = {
  filtroActual: PropTypes.string,
  onCambiarFiltro: PropTypes.func.isRequired
}

FiltroTipo.defaultProps = {
  filtroActual: 'todos'
}

export default FiltroTipo
