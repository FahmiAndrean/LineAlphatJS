const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: ' ElvQ0n7CMoRqn49CXStd.xNY+ICWKI3KF/qZrjjJvJq.x7LtvkVXqQcW9kk5O/QTQKluQPiQj3QbzdzCpRtLAE8=',
	certificate: '',
}
// let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
