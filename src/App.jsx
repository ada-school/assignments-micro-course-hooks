import { generateCardPairs } from './utils/generateCardPairs'

export const App = () => {
	const handleCardClick = (index) => {
		console.log('Hola Adders!')
	}

	return (
		<div className='container-cards'>
			{cards.map((card, index) => (
				<button
					key={card.id}
					className='card'
					style={{
						backgroundColor: card.flipped || card.matched ? 'white' : 'gray',
					}}
				>
					{card.flipped || card.matched ? card.value : ''}
				</button>
			))}
		</div>
	)
}
