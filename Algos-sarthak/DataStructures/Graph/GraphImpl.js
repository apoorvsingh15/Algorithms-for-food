/*
    Implementation of the graph datastructure
*/
let Graph = require('./Graph');
let graph = new Graph();

graph.addNode('A',9);
graph.addNode('B',2);
graph.addNode('C',6);
graph.addNode('D',1);
graph.addNode('E',5);

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