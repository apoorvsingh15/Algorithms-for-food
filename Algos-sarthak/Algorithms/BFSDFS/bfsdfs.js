function bfs(start,graph){
    let { value } = start;
    let nodes = [];

    nodes.push(value);

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

    return nodes;
}

function dfs(start,graph,nodes){
    let { value } = start;
    let edges = graph.edges[value];
    
    if ( edges ){
        edges.forEach(edge => {
            let adjacencies = graph.adjacencies[edge];
            let start = {
                value : adjacencies.to
            }
            
            if (! nodes.includes(start.value)){
                nodes.push(start.value);
                dfs(start,graph,nodes);
            }
        });
    }
    else{
        return
    }
    return nodes;
}

function execute(callback){
    let graph = require('../../DataStructures/Graph/GraphImpl');

    let start = {
        value : 'A'
    }

    if (graph.nodes[start.value]){
        let dfsResult = dfs(start,graph,[start.value]);
        let bfsResult = bfs(start,graph)
        
        callback({
            message: 'The nodes in this graph are: ',
            data: JSON.stringify({
                bfs : bfsResult,
                dfs : dfsResult
            }),
            type: 'success'
        });
    }
}

module.exports = {
    execute
}