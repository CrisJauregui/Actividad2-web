import './Card.css'

const Card = ({ nombre, precio, descripcion, imagen }) => {
  return (
    <article className="card-producto">
      {imagen && (
        <img src={imagen} alt={nombre} className="card-producto__imagen" />
      )}
      <h3 className="card-producto__nombre">{nombre}</h3>
      <p className="card-producto__precio">{precio}</p>
      <p className="card-producto__descripcion">{descripcion}</p>
    </article>
  )
}

export default Card
