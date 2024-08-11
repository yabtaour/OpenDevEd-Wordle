import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import { WordleHook } from "../interfaces/interface";

function Wordle( {word}: { word: string } ) {

	const [showModal, setShowModal] = useState(false);
	const { currentGuess, handleKeyUp, isCorrect, guesses, turns, usedKeys }: WordleHook = useWordle(word);

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keyup', handleKeyUp);
		}
	}, [handleKeyUp]);

	useEffect(() => {
		// console.log(guesses, turns, isCorrect);
		if (isCorrect || turns === 6) {
			// isCorrect ? console.log('You win!') : console.log('You lose!');
			document.removeEventListener('keyup', handleKeyUp);
			setTimeout(() => {
				setShowModal(true);
			}, 2000);
		}
	}, [turns, isCorrect]);

		return (
				<div>
						<h1>{word}</h1>
						<Grid currentGuess={currentGuess} guesses={guesses} turns={turns}/>
						<Keyboard usedKeys={usedKeys}/>
						{
							showModal ? <Modal isCorrect={isCorrect} word={word}/> : null
						}
				</div>
		)
}

export default Wordle;