/*
    Definition for Graph DS
*/


/*
    A node object contains the value of the node.
    This object can be modified further to contain values such as the weight of the node.
*/
class Node {
    constructor(value) {
        this.value = value;
    }
};

/*
    The graph object which contains three types of values.

    - nodes       => a list of nodes in the graph
    - adjacencies => a list of relationships between the nodes
    - edges       => an object containing edjancies
*/
class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencies = [];
        this.edges = {};
    }

    addNode(value) {
        let node = new Node(value);
        this.nodes.push(node);
    }

    addAdjacency(from, to, weight) {
        let nodes = this.nodes.map(node => node.value);
        if (!(nodes.includes(from) && nodes.includes(to))) return;

        let adjacency = {};
        let index = (this.adjacencies.length + 1).toString();
        adjacency[index] = {
            from,
            to,
            weight
        };

        this.adjacencies.push(adjacency);

        for (let i = 0; i < nodes.length; i++) {
            let current = nodes[i];

            if (current == from) {
                if (!this.edges[current]) {
                    this.edges[current] = [index];
                }
                else {
                    this.edges[current].push(index);
                }
            }
        }
    }
}

module.exports = Graph;