/*
    Djikstra Algorithm
*/


// Implementation

function dijkstra(start, graph) {
    let nodes = graph.nodes.map(node => node.value);
    let edges = graph.edges;
    let adjacencies = graph.adjacencies;

    if (!nodes.includes(start)) {
        console.log("The starting node was not found");
    }
    else {

        let startingEdges = edges[start];
        if (startingEdges) {
            let choose;
            let weight = adjacencies[startingEdges[0]].weight;
            for (let i = 0; i < startingEdges.length; i++) {
                let adjacency = adjacencies[startingEdges[i]];

                if (weight >= adjacency.weight) {
                    choose = adjacency
                }
            }
            console.log(choose);
            if (choose.to === 'E') {
                return choose;
            } else {
                return dijkstra(choose.to, graph);
            }
        }
        else{
            return "no exit"
        }
        // console.log(edge);        
    }
}


function execute() {

    let graph = require('../../DataStructures/Graph/GraphImpl');

    // The value of the starting node
    let start = 'A';

    // Find the shortest path to all the other nodes using dijkstra's algorithm
    let mst = dijkstra(start, graph);

    console.log(mst);
}

module.exports = {
    execute
}