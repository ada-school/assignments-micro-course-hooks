export const generateCardPairs = () => {
	const values = [...Array(8).keys(), ...Array(8).keys()]
	return values
		.sort(() => Math.random() - 0.5)
		.map((value, index) => ({
			id: index,
			value,
			flipped: false,
			matched: false,
		}))
}
