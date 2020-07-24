var canFinish = function(numCourses, prerequisites) {
    
    let visited = {};
    let map = new Map();
     for(let i=0; i<prerequisites.length; i++){
        const [firstCourse, secondCourse] = prerequisites[i];
         // courses shouldn't dependent on itself.
         if(firstCourse === secondCourse) return false;
         // check cyclic dependency
        if(visited[secondCourse]){
            if(map.has(secondCourse) && (map.get(secondCourse)[0] === firstCourse)) return false;
        }
        if(visited[firstCourse]){
            // check cyclic dependency using dfs.
            if(visited[secondCourse] && map.has(secondCourse)){
                if(!dfs(map, firstCourse, secondCourse)) return false;
            }
            if(!visited[secondCourse]) visited[secondCourse] = true;
            if(!map.has(firstCourse)){
                map.set(firstCourse, [secondCourse]);
                continue;
             }
            let courses = map.get(firstCourse);
            courses.push(secondCourse);
            map.set(firstCourse, courses);
            continue;
        }
        visited[firstCourse] = true;
        visited[secondCourse] = true;
        map.set(firstCourse, [secondCourse]);
           
    }    
    return (numCourses >= Object.keys(visited).length) ? true: false;
};


function dfs(map, first, second){
    
    let stack = [];
    stack.push(...map.get(second));
    while(stack.length){
        let course = stack.pop();
        if(course === first) return false;
        if(map.has(course)){
            stack.push(...map.get(course));
        }
    }
    return true;
}

let input_array = [[0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [2, 3]];
let n = 5;
let result = canFinish(5, input_array);
console.log(result);