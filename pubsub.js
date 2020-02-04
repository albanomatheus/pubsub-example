const pubsub = () => {
	let events = {};

	const subscribe = (topic, clients) => {
		const subscriptions = events[topic] || [];
		subscriptions.push(...clients);
		events[topic] = subscriptions;
	};

	const publish = (topic, message) => {
		if (events[topic]) {
			events[topic].forEach(({ fn }) => fn(message));
		}
	};

	const unsubscribe = (topic, clientName) => {
		const index = (events[topic] || []).findIndex(
			sub => sub.name === clientName
		);

		if (index >= 0) {
			events[topic].splice(index, 1);
		}
	};

	const broadcast = message => {
		Object.keys(events).forEach(topic => publish(topic, message));
	};

	const close = topic => {
		delete events[topic];
	};

	const disconnect = () => {
		events = {};
	};

	return {
		subscribe,
		publish,
		unsubscribe,
		broadcast,
		close,
		disconnect
	};
};

module.exports = pubsub;
