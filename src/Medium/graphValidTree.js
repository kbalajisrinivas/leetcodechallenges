let n = 5;
let edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
let disjointSet = {};

function TreeNode(node) {
    this.val = node;
    this.parent = this;
    this.rank = 0;
}

function isGraphValidTree(n, edges) {
    //create a set 

    for (let i = 0; i < n; i++) {
        disjointSet[i] = new TreeNode(i);
    }

    for (let i = 0; i < edges.length; i++) {
        const source = edges[i][0];
        const destination = edges[i][1];
        let result = union(disjointSet[source], disjointSet[destination]);
        if (!result) {
            return false;
        }
    }
    return true;
}

function find(node) {
    const parent = node.parent;
    if (node === parent) {
        return node;
    }
    node.parent = find(parent);
    return node.parent;
}

function union(node1, node2) {
    let root1 = find(node1);
    let root2 = find(node2);
    if (root1.parent === root2.parent) {
        // they are part of the same node
        return false;
    }
    // compare rank's. Larger rank's node becomes the parent of smaller rank node
    if (root1.rank < root2.rank) {
        root1.parent = root2;
    } else {
        root2.parent = root1;
        if (root1.rank === root2.rank) {
            root1.rank++;
        }
    }
    return true;
}

let result = isGraphValidTree(6, [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5]]);
console.log(result);

/*
Idea of Disjoint Set is to keep track of the parents 


*/