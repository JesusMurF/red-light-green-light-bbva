import { useEffect, useState } from 'react';
import './Home.scss';
import { GreenLight, Navbar, RedLight } from '../../components';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { Player } from '../../models/player';

function Home() {
  const [username, setUsername] = useState<string>('');
  const [players, setPlayer] = useLocalStorage('players', [] as Player[]);
  const [currentPlayer, setCurrentPlayer] = useLocalStorage<Player>(
    'currentPlayer',
    {} as Player
  );
  const [isValid, setIsValidUsername] = useState<boolean>(true);
  const navigate = useNavigate();

  /**
   * Check if the username is valid
   * @param {string} - Username
   * @returns {boolean}
   * */
  const isValidUsername = (username: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(username);
  };

  /**
   * Check if the username is valid and set the username
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input event
   * @returns {void}
   */
  const handleUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    setIsValidUsername(isValidUsername(value));
    if (isValidUsername(value)) {
      setUsername(value);
    }
  };

  /**
   * If the player is not in the store, add it, if player exists return player
   * @param {string} username - Player name
   */
  const handleLogin = (username: string): void => {
    const player = players.find(
      (player: Player) => player.name === username
    ) || { name: username, score: 0, highScore: 0 };

    if (!players.some((player: Player) => player.name === username)) {
      setPlayer([...players, player]);
    }
    setCurrentPlayer(player);
  };

  useEffect(() => {
    if (currentPlayer.name) {
      navigate('/game');
    }
  }, [currentPlayer, navigate]);

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
          onChange={(e) => handleUsernameChange(e)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && username) {
              handleLogin(username);
            }
          }}
          type="text"
          placeholder="Tu nombre"
        />
        {!isValid && <span>El nombre de usuario no es válido</span>}
        <button
          className="main-content__button"
          onClick={() => username && handleLogin(username)}
          disabled={!isValid}
        >
          Entrar
        </button>
      </main>
    </>
  );
}

export default Home;
