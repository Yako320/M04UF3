import './Die.css';
import {useState} from 'react';

function Die() {

	let [number, setNumber] = useState(1);

	function roll ()
	{
		let randomNumber = (Math.floor(Math.random()*6) + 1);
		setNumber(randomNumber);
	}

  return (
    <button className="Die" onClick={roll}>
			<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
