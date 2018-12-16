/*
    Djikstra Algorithm
*/


// Implementation

function dijkstra(start,graph){
    let priorityQueue = [];
    
    // let nodes = graph.nodes.map(node => node.value);
    let distances = {};

    for (node in graph.nodes){
        distances[node] = 999;
    }
    // nodes.forEach(node => distances[node] = 999);
    
    distances[start.value] = 0;
    priorityQueue.push(start);

    while (priorityQueue.length != 0){
        let top = priorityQueue[0];
        let currentWeight = top.weight;

        // Remove the top
        priorityQueue = priorityQueue.slice(1,priorityQueue.length);

        // Iterate over the edges of top
        let edgesOfTop = graph.edges[top.value];

        if (edgesOfTop && edgesOfTop.length != 0){
            // For each edge find the weight and value
            let firstEdge = graph.adjacencies[edgesOfTop[0]];
    
            let smallest = {
                value: firstEdge.to,
                weight: currentWeight + firstEdge.weight
            }
            
            edgesOfTop.forEach(edgeVal => {
                let edge = graph.adjacencies[edgeVal]
                let totalWeight = currentWeight + edge.weight;
                if (totalWeight < smallest.weight){
                    smallest.value = edge.to;
                    smallest.weight = totalWeight
                }
    
                if (totalWeight < distances[edge.to]){
                    distances[edge.to] = totalWeight;
                }
            });
            
            // Push the smallest value in the priority queue
            priorityQueue.push(smallest);
        }
    }
    return distances;
}


function execute(callback) {

    let graph = require('../../DataStructures/Graph/GraphImpl');

    // The value of the starting node
    let start = {
        value: 'A',
        weight: 0
    };

    let mst;

    // Find the shortest path to all the other nodes using dijkstra's algorithm
    if (graph.nodes[start.value]){
        mst = dijkstra(start, graph);
        callback({ 
            message : "The distances of each of the nodes from the starting point are: ",
            data : JSON.stringify(mst),
            type : "success"
        });
    }
    else {
        callback({
            message: "Starting value is not a part of the graph", 
            type: "error"
        });
    }
}

module.exports = {
    execute
}