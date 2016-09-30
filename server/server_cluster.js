const cluster = require('cluster');
const cpus = require('os').cpus();
const instance = require('./server');

const startWorker = () => {
    const worker = cluster.fork();
    console.log(`CLUSTER: Worker ${worker.id} started`);
};

if (cluster.isMaster) {
    cpus.forEach(() => {
        startWorker();
    });

    //if worker disconnects it should then exit. we wait for exit to create new worker
    cluster.on('disconnect', (worker) => {
        console.log(`CLUSTER: Worker ${worker.id} disconnected from the cluster`);
    });

    // if worker dies, create new worker to replace it
    cluster.on('exit', (worker, code, signal) => {
        console.log(`CLUSTER: Worker ${worker.id} dies with exit code ${code} (${signal})`);
        startWorker();
    });
} else {
    // start app on worker
    instance();
}