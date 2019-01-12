// --- Directions
// Given a MxN matrix where each element can either be 0 or 1.
// We need to find the shortest path between a given source cell to a destination cell.
// The path can only be created out of a cell if its value is 1.
// You will be provided with start and goal locations

//



function findMinEdge(subEdges){
    let min = null;
    for(const edge of subEdges){
        if(min === null){
            min = edge;
        }else if(min[2] > edge [2]){
            min = edge;
        }
    }
    return min;
}



function findEdgesIn(visited, remained, edges) {
    let edgesBetweenSrcObj = [];
    for (const edge of edges) {
        for (const srcIndex of visited) {
            for (const objIndex of remained) {
                if ( (edge[0] === srcIndex && edge[1] === objIndex) || (edge[0] === objIndex && edge[1] === srcIndex)) { // 无向
                    edgesBetweenSrcObj.push(edge);
                }
            }
        }
    }
    // console.log(edgesBetweenSrcObj);
    // exit()
    console.log(visited,remained,edgesBetweenSrcObj);
    return edgesBetweenSrcObj;
}




function mst(edges, vertices) {

    if(edges.length===0){
        return [];
    }

    let visited = new Set(); // 顶点
    let remained = new Set(vertices); // 顶点
    let mstree = []; // 边
    let cur = edges[0][0];
    while (remained.size !== 1) {
        visited.add(cur);
        remained.delete(cur);
        let edgesCheckList = findEdgesIn(visited, remained, edges,edgesMapper);
        let min = findMinEdge(edgesCheckList);
        mstree.push(min);
        cur = !visited.has(min[0]) ? min[0] : min[1]; // 更新
    }
    return mstree;
}


module.exports = mst;
