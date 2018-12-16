# A Star Algorithm

This is a graph algorithm which helps us to find the shortest path from one node to every other node.
Similar to dijkstra algorithm, in this algorithm we have weighted nodes which help us better decide the path
to our target.

Here is the pseudocode for this algorithm.

* We initialize an object 'distances' where we initialize the distances of all the nodes from starting point
to 999
* We set the starting value to be 0 in the distances object
* Then we create a priority queue in which the nodes nearest to the starting point will be put.
* Till the priority queue is not empty follow these steps
    * Remove the top value in the priority queue and store the top value in some variable.
    * The weight of the topmost node is f
    * Get all the edges of the top value.
    * If there are edges
        * Calculate g which is the weight of the edge.
        * Calculate h which is the weight of the node that the edge connects to.
        * Get the node with the smallest f + g+ h and push it in the priority queue.
        * For all the nodes check if the distance value (f + g + h) for the connected node is less than what is stored, 
            If yes then exchange
* Return the 'distances' object.
     

For the graph

[![solarized dualmode](https://github.com/apoorvsingh15/Algorithms-for-food/blob/master/assets/weighted_graph_with_weighted_nodes.jpg)](#features)

The shortest distance of each of the nodes from the starting point are:
> {"A":0, "B":6, "C":8, "D":9, "E":14}

# Complexity

With adjacency list and priority queue technique the time complexity for a star search is

> O (E)
where e is the number of edges.

And the auxillary space is
> O (V)
where v is the total number of vertices.

# References

https://www.youtube.com/watch?v=ySN5Wnu88nE
A* (A Star) Search Algorithm - Computerphile
