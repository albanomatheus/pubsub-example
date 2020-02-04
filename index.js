const pubsub = require("./pubsub");
const { bingoChannel, restaurantChannel } = require("./channels");

const eventManager = pubsub();

eventManager.subscribe(bingoChannel.name, bingoChannel.clients);
eventManager.subscribe(restaurantChannel.name, restaurantChannel.clients);

const bingoInterval = setInterval(() => {
	eventManager.publish(bingoChannel.name, bingoChannel.send());
}, 3000);

setTimeout(() => {
	console.info("Peter leaves the game");
	eventManager.unsubscribe(bingoChannel.name, bingoChannel.clients[1].name);
}, 10000);

setTimeout(() => {
	console.info("Bingo channel will close");
	eventManager.close(bingoChannel.name);
}, 15000);

setTimeout(() => {
	eventManager.broadcast("Event Manager will turn off!");
	eventManager.disconnect();
	clearInterval(bingoInterval);
	process.exit();
}, 20000);
