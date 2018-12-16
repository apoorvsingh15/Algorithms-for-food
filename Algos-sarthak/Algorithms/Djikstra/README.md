# Dijkstra's Algorithm

This is a graph algorithm which helps us to find the shortest path from one node to every other node.

Here is the pseudocode for this algorithm.

* We initialize an object 'distances' where we initialize the distances of all the nodes from starting point
to 999
* We set the starting value to be 0 in the distances object
* Then we create a priority queue in which the nodes nearest to the starting point will be put.
* Till the priority queue is not empty follow these steps
    * Remove the top value in the priority queue and store the top value in some variable.
    * Get all the edges of the top value.
    * If there are edges
        * Add the weight of the top value to the weight of every vertex for each node you check.
        * Iterate through the edges and get the node with the smallest weight.
        * Store the node with the vertex with smallest weight in the priority queue.
        * For all the nodes check if the distance value from the current node is less than what is stored, 
            If yes then exchange
* Return the 'distances' object.
     

For the graph

[![solarized dualmode](https://github.com/apoorvsingh15/Algorithms-for-food/blob/master/assets/graph.jpg)](#features)

The shortest distance of each of the nodes from the starting point are:
> { A: 0, B: 3, C: 2, D: 5, E: 6 }

# References

https://www.youtube.com/watch?v=GazC3A4OQTE
