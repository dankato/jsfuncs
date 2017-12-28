// A graph search algorithm that solves the single-source shortest path problem for a graph with nonnegative edge path costs, producing a shortest path tree.

let map = {
    a: { b: 3, c: 1 },
    b: { a: 2, c: 1 },
    c: { a: 4, b: 1 }
  },
  graph = new Graph(map);

// This Dijkstra's algorithm implementation work for directed graph, this means path form A to B is not the same as B to A, that's why you can have different weights on A->B and B->A.

graph.findShortestPath("a", "b"); // => ['a', 'c', 'b']
graph.findShortestPath("a", "c"); // => ['a', 'c']
graph.findShortestPath("b", "a"); // => ['b', 'a']
graph.findShortestPath("b", "c", "b"); // => ['b', 'c', 'b']
graph.findShortestPath("c", "a", "b"); // => ['c', 'b', 'a', 'c', 'b']
graph.findShortestPath("c", "b", "a"); // => ['c', 'b', 'a']

const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {}
};

if



//https://hackernoon.com/how-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04

//
function PriorityQueue() {
  this._nodes = [];

  this.enqueue = function(priority, key) {
    this._nodes.push({ key: key, priority: priority });
    this.sort();
  };
  this.dequeue = function() {
    return this._nodes.shift().key;
  };
  this.sort = function() {
    this._nodes.sort(function(a, b) {
      return a.priority - b.priority;
    });
  };
  this.isEmpty = function() {
    return !this._nodes.length;
  };
}

/**
 * Pathfinding starts here
 */
function Graph() {
  var INFINITY = 1 / 0;
  this.vertices = {};

  this.addVertex = function(name, edges) {
    this.vertices[name] = edges;
  };

  this.shortestPath = function(start, finish) {
    var nodes = new PriorityQueue(),
      distances = {},
      previous = {},
      path = [],
      smallest,
      vertex,
      neighbor,
      alt;

    for (vertex in this.vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while (!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if (smallest === finish) {
        path = [];

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (!smallest || distances[smallest] === INFINITY) {
        continue;
      }

      for (neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  };
}

var g = new Graph();

g.addVertex("A", { B: 7, C: 8 });
g.addVertex("B", { A: 7, F: 2 });
g.addVertex("C", { A: 8, F: 6, G: 4 });
g.addVertex("D", { F: 8 });
g.addVertex("E", { H: 1 });
g.addVertex("F", { B: 2, C: 6, D: 8, G: 9, H: 3 });
g.addVertex("G", { C: 4, F: 9 });
g.addVertex("H", { E: 1, F: 3 });

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(
  g
    .shortestPath("A", "H")
    .concat(["A"])
    .reverse()
);









# Pokemon ice cave question
#Imagine you are in the Pokemon game, in an ice cave puzzle.  You can move in any direction, but you slide, until you hit an obstacle.  What is the shortest amount of moves that you can do to get to the end

#this is breadth first search
# NOW, imagine that you want to find the smallest number of steps, that you have to take to get to the end

#this solution solves the shortest amount of steps, not moves!
from collections import deque
def min_steps(grid, x,y):

  queue = deque([])
  #popleft
  #append
  min_steps_so_far = None

  queue.append({'x':x, 'y':y, 'steps': 0})

  while(len(queue) > 0):
    new_queue = deque([])
    while(len(queue) > 0):
      loc = queue.popleft()
      if min_steps_so_far is not None and loc['steps'] >= min_steps_so_far:
        continue
      if grid[loc['x']][loc['y']] == 2:
        if min_steps_so_far is None:
          min_steps_so_far = loc['steps']
        elif loc['steps'] < min_steps_so_far:
          min_steps_so_far = loc['steps']
      else:
        #move right
        steps = 0
        for x_move in range(loc['x'], len(grid)):
          if x_move >= len(grid) - 1:
            break
          elif grid[x_move + 1][loc['y']] == 1:
            break
          elif grid[x_move][loc['y']] == 2:
            break
          steps += 1
        if steps > 0:
          new_queue.append({'x':x_move, 'y':loc['y'], 'steps': steps + loc['steps']})
        #move down
        steps = 0
        for y_move in range(loc['y'], len(grid[loc['x']])):
          if y_move >= len(grid[loc['x']]) - 1:
            break
          elif grid[loc['x']][y_move + 1] == 1:
            break
          elif grid[loc['x']][y_move] == 2:
            break
          steps += 1
        if steps > 0:
          new_queue.append({'x':loc['x'], 'y':y_move, 'steps': steps + loc['steps']})

    queue = new_queue

  return min_steps_so_far


print(1 if min_steps(
    [[0, 0, 1, 0],
    [0, 0, 2, 0],
    [1, 0, 0, 0]], 0, 0) == 3 else 0)
