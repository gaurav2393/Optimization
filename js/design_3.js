[50, 30, 10, 15, 20]
[50, 100, 80, 78, 75]

0

function a(root, source, dest) {
    let tempRoot = {};
    let sourcePaths = [root[value]];
    let destPaths = [root[value]];
    let finalPath = '';
    while(true) {
        if(root[value] > source) {
            sourcePaths.push(root[left][value]);
            tempRoot=[root[left]];
        } else if (root[value] < source) {
            sourcePaths.push(root[right][value]);
            tempRoot=[root[right]]
        } else {
            break;
        }
    }
    sourPaths = [50, 30, 10, 5, 3];
    destPaths = [50, 30, 10, 5];
    while(true) {
        // same for dest
    }
    for(let i = 1 ; i < sourcePaths.length ; i++) {
        if(sourcePaths[i]===destPaths[i]) {
            parentIndex = i;
        }
    }
    if(!parentIndex) {
        parentIndex = 0;
    }
    for (let i = sourcePaths.length-1 ; i >=parentIndex ; i--) {
3, 5
    }
    
}

root = {
    left: {
        value: 50,

    }
}



.revers
