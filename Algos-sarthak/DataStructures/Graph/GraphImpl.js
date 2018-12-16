/*
    Implementation of the graph datastructure
*/
let Graph = require('./Graph');
let graph = new Graph();

graph.addNode('A',10);
graph.addNode('B',11);
graph.addNode('C',12);
graph.addNode('D',13);
graph.addNode('E',14);

graph.addAdjacency('A','B',4);
graph.addAdjacency('A','C',2);
graph.addAdjacency('C','B',1);
graph.addAdjacency('C','D',4);
graph.addAdjacency('C','E',5);
graph.addAdjacency('B','C',3);
graph.addAdjacency('B','E',3);
graph.addAdjacency('B','D',2);
graph.addAdjacency('E','D',1);

module.exports = graph;