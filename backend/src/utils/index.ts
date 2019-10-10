// events.js
import EventEmitter from 'eventemitter3';
const emitter = new EventEmitter();

function subscribe(req: any, res: any) {

	res.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		Connection: 'keep-alive'
	});

	// Heartbeat
	const nln = function() {
		res.write('\n');
	};
	const hbt = setInterval(nln, 1000);

	const onEvent = function(data: any) {
        console.log('SSE request.');
		res.write('retry: 500\n');
		res.write(`event: event\n`);
		res.write(`data: ${JSON.stringify(data)}\n\n`);
	};

	emitter.on('event', onEvent);

	// Clear heartbeat and listener
	req.on('close', function() {
		clearInterval(hbt);
		emitter.removeListener('event', onEvent);
	});
}

function publish(eventData: any) {
  // Emit events here recieved from Github/Twitter APIs
	emitter.emit('event', eventData);
}

module.exports = {
	subscribe, // Sending event data to the clients 
	publish // Emiting events from streaming servers
};