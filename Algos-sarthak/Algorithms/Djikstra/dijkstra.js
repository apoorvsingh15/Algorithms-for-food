/*
    Djikstra Algorithm
*/

let Graph = require('../../DataStructures/Graph/Graph');

let graph = new Graph();


graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addAdjacency('A','B',4);
graph.addAdjacency('A','C',2);
graph.addAdjacency('C','B',1);
graph.addAdjacency('C','D',4);
graph.addAdjacency('C','E',5);
graph.addAdjacency('B','C',3);
graph.addAdjacency('B','E',3);
graph.addAdjacency('B','D',2);
graph.addAdjacency('E','D',1);

console.log(JSON.stringify(graph));