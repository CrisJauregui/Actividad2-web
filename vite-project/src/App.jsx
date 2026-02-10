import Card from "./components/Card";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Card
        nombre="Café"
        precio="4.000"
        descripcion="Café recién hecho"
        imagen="https://cafesmoreno.com/wp-content/uploads/2022/07/descafeinado_web.jpg"
      />

      <Card
        nombre="Leche"
        precio="14.000"
        descripcion="Leche de vaca"
        imagen="https://ichef.bbci.co.uk/ace/ws/624/amz/worldservice/live/assets/images/2014/11/05/141105131956_leche_624x351_thinkstock.jpg.webp"
      />

      <Card
        nombre="Huevos"
        precio="6.000"
        descripcion="Huevos de gallina"
        imagen="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNqWck6MiM1PTbcF3Z4_Cmao-BagrGhPxuzWwJwqRMralg2rUnGKvdqfitB3BVZo1OKvYp6KHAra30-3Mo-eBy8v2u8FrDt_VrK78NZlbQgUEkUTsueJ-yHcDeVjCuQyQZF-dtAZMdLOuo/s1600/uhevos.jpg"
      />
    </div>
  );
};

export default App;