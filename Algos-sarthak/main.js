const yargs = require('yargs').argv;
const chalk = require('chalk');

let algorithm = yargs.algo;

if (! algorithm){
    console.log(chalk.red("Invalid command! Try using: "));
    console.log(chalk.grey("\'node Algos-sarthak\main.js --algo=<algorithm_name>\'"));
}
else{
    // Play the algo
    switch(algorithm){
        case "dijkstra": {
            let dijkstra = require('./Algorithms/Djikstra/dijkstra');
            dijkstra.execute();
            break;
        }
        case "astar": {
            let astar = require('./Algorithms/Astar/astar');
            astar.execute();
            break;
        }
        default:
            console.log("Sorry! I have not written this algorithm yet :(");

    }
   
}