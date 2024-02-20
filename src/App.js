import logo from "./logo.svg";
import "./App.css";
import Perfil from "./components/Perfil";

function App() {
  const personajes = [
    {
      nombre: "Brais Moure",
      pais: "España",
      imagen: "brais",
      cargo: "Ingeniero de Software",
      empresa: "Fundador de Moure Dev",
      resena:
        "Es un desarrollador español que comparte rescursos educativos online",
    },
    {
      nombre: "Miguel Ángel Durán",
      pais: "España",
      imagen: "midudev",
      cargo: "Ingeniero de Software",
      empresa: "Fundador de Moure Dev",
      resena: "YouTuber Español que comparte su conocimiento",
    },
    {
      nombre: "Jorge Sanchez",
      pais: "Peru",
      imagen: "mito",
      cargo: "Ingeniero de Software",
      empresa: "Fundador de MitoCode",
      resena: "YouTuber Peruano que comparte su conocimiento",
    },
  ];
  return (
    <div className="App">
      <div className="main-container">
        <h1>Mis cuentas favoritas de YouTube son:</h1>
        {personajes.map((personaje) => (
          <Perfil
            key={personaje.nombre}
            nombre={personaje.nombre}
            pais={personaje.pais}
            imagen={personaje.imagen}
            cargo={personaje.cargo}
            empresa={personaje.empresa}
            resena={personaje.resena}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
