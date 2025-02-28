import './Die.css';
import {useState} from 'react';

function Die(props) {

	let [number, setNumber] = useState("-");

	function get_random ()
	{
		return Math.floor(Math.random()*6) + 1;
	}

	function set_random ()
	{
		let randomNumber = get_random();
		setNumber(randomNumber);
	}

	if (props.roll){
		number = get_random();

		props.onResult(number);
	}

  return (
    <button className="Die" onClick={set_random}>
			<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
