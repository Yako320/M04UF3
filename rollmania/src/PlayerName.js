//import './PlayerName.css';
import { useState } from 'react';

function PlayerName(props) {
	let [player_name, setPlayerName] = useState("");

	return (
			<p><input type="text" name="player_name" placeholder="Nombre del jugador/a"/> <button>Guardar</button></p>
  );
}

export default PlayerName;
