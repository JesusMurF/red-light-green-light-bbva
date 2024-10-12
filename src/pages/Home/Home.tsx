import { useState } from "react";
import "./Home.scss";
import { GreenLight, Navbar, RedLight } from "../../components";

function Home() {
  const [username, setUsername] = useState<string>("");

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="main-content__title">
          <RedLight isActive />
          <GreenLight isActive />
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

export default Home;
