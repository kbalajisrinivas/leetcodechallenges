// https://leetcode.com/problems/keys-and-rooms/

var canVisitAllRooms = function (rooms) {
    let roomsVisited = new Set();
    let result = dfs(rooms, 0, roomsVisited);
    if (roomsVisited.size !== rooms.length) {
        return false;
    }

    return true;
};

function dfs(rooms, currentRoom, roomsVisited) {
    roomsVisited.add(currentRoom);
    for (let i = 0; i < rooms[currentRoom].length; i++) {
        let currentKey = rooms[currentRoom][i];
        if (roomsVisited.has(currentKey)) {
            continue;
        }
        dfs(rooms, currentKey, roomsVisited);
    }
}

let input_array = [[1, 3], [3, 0, 1, 2], [2], [0]];
let result = canVisitAllRooms(input_array);
console.log(result);