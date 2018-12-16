/*
    Definition for Graph DS
*/


/*
    A node object contains the value of the node.
    This object can be modified further to contain values such as the weight of the node.
*/
class Node {
    constructor(value, weight) {
        this.value = value;

        // Weight of the node for a star search
        this.weight = weight;
    }
};

/*
    The graph object which contains three types of values.

    - nodes       => a list of nodes in the graph
    - adjacencies => an object containing relationships between the nodes
    - edges       => an object containing edjancies
*/
class Graph {
    constructor() {
        this.nodes = {};
        this.adjacencies = {};
        this.edges = {};
    }

    addNode(value, weight) {
        let node = new Node(value, weight);
        this.nodes[value] = node;
    }

    addAdjacency(from, to, weight) {
        let nodes = this.nodes;

        if (!( nodes[from] && nodes[to] )) return;

        let adjacency = {
            from,
            to,
            weight
        };
        
        let index = (Object.keys(this.adjacencies).length + 1).toString();
        this.adjacencies[index] = adjacency;

        for (let node in nodes) {
            let current = node;

            if (current == from) {
                if (!this.edges[current])   this.edges[current] = [index];
                else this.edges[current].push(index);
            }
        }
    }
}

module.exports = Graph;