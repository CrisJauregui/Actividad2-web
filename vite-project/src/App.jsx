import Card from './components/Card'
import './App.css'

const productos = [
  {
    id: 1,
    nombre: 'Café',
    precio: '$85',
    descripcion: 'Café molido de origen, tostado medio. Ideal para empezar el día.',
    imagen: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  },
  {
    id: 2,
    nombre: 'Leche',
    precio: '$32',
    descripcion: 'Leche entera fresca, 1 litro. Refrigerar después de abrir.',
    imagen: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
  },
  {
    id: 3,
    nombre: 'Huevos',
    precio: '$58',
    descripcion: 'Huevos blancos, cartón de 30 piezas. Producto local.',
    imagen: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80',
  },
]

const App = () => {
  return (
    <div className="app">
      <h1>Productos</h1>
      <div className="lista-tarjetas">
        {productos.map((producto) => (
          <Card
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </div>
  )
}

export default App
