# Breadth First Search Traversal of a graph

In breadth first search traversal, we traverse the graph by getting each edge and pushing it into 
an array. We then traverse through the array and get the edges of the particular value and push it
into the array.

* bfs(start,graph)
    * Create an array by the name nodes with the starting value in it
    * Initialize variable i = 1
    * While i <= nodes.length
        * Initialize variable value to nodes[i-1]
        * Get the edges of this node
        * If there are any edges
            * Get the adjacencies for each edge
            * Check if the connected value already exists in nodes array. If not, push it to the array.
    * Return the nodes array

# Depth First Search Traversal of a graph

In depth first search traversal, we traverse the graph by getting edges of each element till we reach a
node with no edge, we then move on to the next untraversed edge. This will involve recursion.

* dfs(start,graph,nodes)
    * Get the value of the starting node
    * Get the edges associated with the starting node
    * If there are no values, return
    * else
        * Get the adjacencies for each edge
        * If the associated adjacency is not in the node array
            * Insert the value in the node array
            * dfs(start,graph,nodes)
    * Return the nodes array