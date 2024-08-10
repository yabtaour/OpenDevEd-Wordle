interface RowProps {
	guess: {key: string, color: string}[],
	currentGuess?: string,
}

function Row({guess, currentGuess}: RowProps) {


	if (guess) {
		return (
			<div className="row">
				{
					guess.map((letter: any, index: number) => {
						return (
							<div className={letter.color} key={index}>
								{letter.key}
							</div>
						)
					})
				}
			</div>
		)
	}

	if (currentGuess) {
		let letters = currentGuess.split('');
		return (
			<div className="row">
				{
					letters.map((letter: string, index: number) => {
						return (
							<div key={index}>
								{letter}
							</div>
						)
					})
				}
					{[...Array(5 - letters.length)].map((_, index) => {
						return <div key={index}></div>
					})}
			</div>
		)
	}

	return (
		<div className="row">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Row;