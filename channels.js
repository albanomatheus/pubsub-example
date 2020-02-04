const bingoChannel = {
	name: "bingo",
	send: () => `Number drawn: ${Math.floor(Math.random() * 100)}`,
	clients: [
		{
			name: "Jhon",
			fn: message => {
				console.log(`[Jhon] => ${message}`);
			}
		},
		{
			name: "Peter",
			fn: message => {
				console.log(`[Peter] => ${message}`);
			}
		},
		{
			name: "George",
			fn: message => {
				console.log(`[George] => ${message}`);
			}
		},
		{
			name: "Michael",
			fn: message => {
				console.log(`[Michael] => ${message}`);
			}
		}
	]
};

const restaurantChannel = {
	name: "restaurant",
	send: () => `Next number: ${Math.floor(Math.random() * 100)}`,
	clients: [
		{
			name: "painel",
			fn: message => {
				console.log(`[RESTAURANT] => ${message}`);
			}
		}
	]
};

module.exports = { bingoChannel, restaurantChannel };
