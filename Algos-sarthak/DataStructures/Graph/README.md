# Graph

The graph object which contains three types of values.

- nodes       => an object containing nodes in the graph
- adjacencies => an object containing relationships between the nodes
- edges       => an object containing edjancies

For the graph

[![solarized dualmode](https://github.com/apoorvsingh15/Algorithms-for-food/blob/master/assets/graph.jpg)](#features)

The graph object will be

```json
{
  "nodes": {
    "A": {
      "value": "A",
      "weight": 9
    },
    "B": {
      "value": "B",
      "weight": 2
    },
    "C": {
      "value": "C",
      "weight": 6
    },
    "D": {
      "value": "D",
      "weight": 1
    },
    "E": {
      "value": "E",
      "weight": 5
    }
  },
  "adjacencies": {
    "1": {
      "from": "A",
      "to": "B",
      "weight": 4
    },
    "2": {
      "from": "A",
      "to": "C",
      "weight": 2
    },
    "3": {
      "from": "C",
      "to": "B",
      "weight": 1
    },
    "4": {
      "from": "C",
      "to": "D",
      "weight": 4
    },
    "5": {
      "from": "C",
      "to": "E",
      "weight": 5
    },
    "6": {
      "from": "B",
      "to": "C",
      "weight": 3
    },
    "7": {
      "from": "B",
      "to": "E",
      "weight": 3
    },
    "8": {
      "from": "B",
      "to": "D",
      "weight": 2
    },
    "9": {
      "from": "E",
      "to": "D",
      "weight": 1
    }
  },
  "edges": {
    "A": [
      "1",
      "2"
    ],
    "C": [
      "3",
      "4",
      "5"
    ],
    "B": [
      "6",
      "7",
      "8"
    ],
    "E": [
      "9"
    ]
  }
}
```