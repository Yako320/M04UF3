//import './PlayerName.css';
import { useState } from 'react';

function PlayerName(props) {
	let [player_name, setPlayerName] = useState("");
	let [show_name, setShowName] = useState(false);

	function update_name (event) {
		console.log(event.target.value);
		setPlayerName(event.target.value);
	}

	function write_name () {
		console.log("Nombre: "+player_name);
	}

	return (
			<p>
			<input type="text" name="player_name" placeholder="Nombre del jugador/a" onChange={update_name} /> 
			<button onClick={write_name}>Guardar</button>
			</p>
  );
}

export default PlayerName;
