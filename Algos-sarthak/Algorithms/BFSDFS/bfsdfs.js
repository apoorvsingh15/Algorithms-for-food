function bfs(start,graph){
    let { value } = start;
    let nodes = [];
    nodes.push(value);
    console.log(nodes.length)
    for (let i=1; i <= nodes.length; i++ ){
        let value = nodes[i-1];
        let edges = graph.edges[value];

        if (edges){
            edges.forEach(edge => {
                let adjacency = graph.adjacencies[edge];
                if (!nodes.includes(adjacency.to)) nodes.push(adjacency.to);
            });
        }
    }

    return {
        nodes
    };
}

function dfs(start,graph){
    
}

function execute(callback){
    let graph = require('../../DataStructures/Graph/GraphImpl');

    let start = {
        value : 'A'
    }

    if (graph.nodes[start.value]){
        let result = bfs(start,graph);
        
        callback({
            message: 'The nodes in this graph are: '+JSON.stringify(result),
            type: 'success'
        });
    }
}

module.exports = {
    execute
}