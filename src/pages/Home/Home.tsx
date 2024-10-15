import { useState } from 'react';
import { GreenLight, NameInput, Navbar, RedLight } from '../../components';
import { usePlayerLogin, useTextValidation } from '../../hooks';

import './Home.scss';

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const { isValid, validateText } = useTextValidation();
  const { handleLogin } = usePlayerLogin();

  /**
   * Check if the username is valid and set the username
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input event
   * @returns {void}
   */
  const handleUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    validateText(value);
    if (isValid) {
      setUsername(value);
    }
  };

  return (
    <>
      <Navbar />
      <main className="home-container">
        <div className="home-container__title">
          <RedLight isActive />
          <GreenLight isActive />
        </div>
        <NameInput
          onKeyDown={(e) => {
            if (e.key === 'Enter' && username) {
              handleLogin(username);
            }
          }}
          onChange={handleUsernameChange}
          isValid={isValid}
          placeholder="Tu nombre"
          value={username}
        />
        <p className="home-container__info">
          Escribe tu nombre y pulsa intro o haz clic en entrar para empezar el
          juego
        </p>
        <button
          className="home-container__button"
          onClick={() => username && handleLogin(username)}
          disabled={!isValid}
          data-testid="login-button"
        >
          Entrar
        </button>
      </main>
    </>
  );
}
