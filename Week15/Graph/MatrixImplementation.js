class GraphMatrix {
    constructor(size) {
        this.size = size;
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    addEdge(u, v) {
        this.matrix[u][v] = 1;
        this.matrix[v][u] = 1;
    }

    printGraph() {
        for (let i = 0; i < this.size; i++) {
            let row = "";
            for (let j = 0; j < this.size; j++) {
                row += this.matrix[i][j] + " ";
            }
            console.log(row);
        }
    }
}


const graphMatrix = new GraphMatrix(5);
graphMatrix.addEdge(0, 1);
graphMatrix.addEdge(0, 4);
graphMatrix.addEdge(1, 2);
graphMatrix.addEdge(1, 3);
graphMatrix.addEdge(1, 4);
graphMatrix.addEdge(2, 3);
graphMatrix.addEdge(3, 4);

console.log("Adjacency Matrix:");
graphMatrix.printGraph();
