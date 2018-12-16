function astar(start, graph){
    let priorityQueue = [];
    
    let nodes = graph.nodes.map(node => node.value);
    let distances = {};

    nodes.forEach(node => distances[node] = 999);

    distances[start.value] = 0;
    priorityQueue.push(start);

    while (priorityQueue.length != 0){
        let top = priorityQueue[0];
        
        // Current weight
        let f = top.weight;

        // Get edges
        let edges = graph.edges[top.value];

        if (!edges){
            console.log("dd")
        }
        else{

            let firstEdge = graph.adjacencies[edgesOfTop[0]];
    
            let smallest = {
                value: firstEdge.to,
                weight: f + graph.adjacencies[edge].weight + h;
            }

            edges.forEach(edge => {
                let adjacency = graph.adjacencies[edge];
                let g = adjacency.weight;
    
                let h;
                for (let i=0; i < graph.nodes.length; i++){
                    let node = graph.nodes[i];
                    if (node.value === adjacency.to){
                        h = node.weight;
                        break;   
                    }
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
        }
        
    }


}

function execute(callback) {
    let graph = require('../../DataStructures/Graph/GraphImpl');
    let start = {
        value : 'A'
    }

    start.weight = 0;
    let nodes = graph.nodes;

    let exists = false;
    nodes.forEach(node =>{
        if (node.value === start.value)
            exists = true;
    })

    if (exists){
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