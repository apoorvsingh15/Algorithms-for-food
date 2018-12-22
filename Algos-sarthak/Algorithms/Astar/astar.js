/*
    A Star Search Algorithm
*/


// Implementation
function astar(start, graph){
    let priorityQueue = [];
    
    // Get all the nodes
    let nodes = graph.nodes;
    let distances = {};

    // Initialize the distances of all the nodes to be a finite value such as 999
    for (node in nodes){
        distances[node] = 999;
    }

    // Distance from current node is 0
    distances[start.value] = 0;

    // Push the starting node into the priority queue
    priorityQueue.push(start);

    // While priority queue is not empty
    while (priorityQueue.length != 0){
        let top = priorityQueue[0];
        
        // Remove the top
        priorityQueue = priorityQueue.slice(1,priorityQueue.length);

        // Current weight
        let f = top.weight;

        // Get edges
        let edges = graph.edges[top.value];

        if (!edges || edges.length == 0){
            console.log("No edges further from "+top.value);
        }
        else{

            // If edges exist find the smallest node with f + g + h
            let firstEdge = graph.adjacencies[edges[0]];
    
            let smallest = {
                value: firstEdge.to,
                weight: f + firstEdge.weight + graph.nodes[firstEdge.to].weight
            }

            edges.forEach(edge => {
                let adjacency = graph.adjacencies[edge];
                let g = adjacency.weight;
    
                let h;

                if (graph.nodes[adjacency.to]){
                    h = graph.nodes[adjacency.to].weight;
                }

                let currWeight = f + g + h;

                if (smallest.weight > currWeight){
                    smallest = {
                        value : adjacency.to,
                        weight: currWeight
                    }
                }
                
                if (distances[adjacency.to] > currWeight){
                    distances[adjacency.to] = currWeight;
                }
                
            });
            
            // Push the smallest node in the priority queue
            priorityQueue.push(smallest);
        }
        
    }
    return distances;

}

function execute(callback) {
    let graph = require('../../DataStructures/Graph/GraphImpl');
    let start = {
        value : 'A'
    }

    start.weight = 0;
    
    if (graph.nodes[start.value]){
        mst = astar(start, graph);
        callback({ 
            message : "The distances of each of the nodes from the starting point are: ",
            data : JSON.stringify(mst),
            type : "success"
        });

    }
    else{
        callback({
            message : "The starting node is not present in the graph",
            type: "error"
        });
    }
}

module.exports = {
    execute
}