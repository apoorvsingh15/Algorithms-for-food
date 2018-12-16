const yargs = require('yargs').argv;
const chalk = require('chalk');

let algorithm = yargs.algo;

let print = result => {
    if (result.type === "success"){
        console.log(chalk.green(result.message))
        console.log(chalk.grey(result.data))
    }
    if (result.type === "error")
        console.log(chalk.red(result.message))
};

if (! algorithm){
    console.log(chalk.red("Invalid command! Try using: "));
    console.log(chalk.grey("\'node Algos-sarthak\main.js --algo=<algorithm_name>\'"));
}
else{
    // Play the algo
    switch(algorithm){
        case "dijkstra": {
            let dijkstra = require('./Algorithms/Dijkstra/dijkstra');
            dijkstra.execute( result => print(result));
            break;
        }
        case "astar": {
            let astar = require('./Algorithms/Astar/astar');
            astar.execute( result => print(result));
            break;
        }
        case "graphimpl":{
            let graphImpl = require('./DataStructures/Graph/GraphImpl');
            console.log(graphImpl);
            break;
        }
        default:
            console.log("Sorry! I have not written this algorithm yet :(");

    }
   
}