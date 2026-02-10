import Card from './components/Card'
import './App.css'

const productos = [
  {
    id: 1,
    nombre: 'Café',
    precio: '$85',
    descripcion: 'Café molido de origen, tostado medio. Ideal para empezar el día.',
    imagen: 'https://cafesmoreno.com/wp-content/uploads/2022/07/descafeinado_web.jpg',
  },
  {
    id: 2,
    nombre: 'Leche',
    precio: '$32',
    descripcion: 'Leche entera fresca, 1 litro. Refrigerar después de abrir.',
    imagen: 'https://ichef.bbci.co.uk/ace/ws/624/amz/worldservice/live/assets/images/2014/11/05/141105131956_leche_624x351_thinkstock.jpg.webp',
  },
  {
    id: 3,
    nombre: 'Huevos',
    precio: '$58',
    descripcion: 'Huevos blancos, cartón de 30 piezas. Producto local.',
    imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNqWck6MiM1PTbcF3Z4_Cmao-BagrGhPxuzWwJwqRMralg2rUnGKvdqfitB3BVZo1OKvYp6KHAra30-3Mo-eBy8v2u8FrDt_VrK78NZlbQgUEkUTsueJ-yHcDeVjCuQyQZF-dtAZMdLOuo/s1600/uhevos.jpg',
  },
]

const App = () => {
  return (
    <div className="app">
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
