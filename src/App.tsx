import { useState } from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [username, setUsername] = useState<string>("");

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="main-content__title">
          <h1 className="main-content__title--red">Red Light, &nbsp;</h1>
          <h1 className="main-content__title--green">Green Light</h1>
        </div>
        <input
          className="main-content__input"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Tu nombre"
        />
        <button
          className="main-content__button"
          onClick={() => console.log(username)}
        >
          Entrar
        </button>
      </main>
    </>
  );
}

export default App;
