function makeArray(collection){
    return collection instanceof Array ? collection.slice() : Object.values(collection)
}

function myEach(collection, callback){
   const arr = makeArray(collection);
   for(let i = 0; i < arr.length; i++){
       callback(arr[i]);
   };
   return collection
};

function myMap(collection, callback){
    const arr = makeArray(collection)
    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i]);
    }
    return arr
}

function myReduce(collection, callback, acc){
    let arr = makeArray(collection);
    if(!acc){
        acc = arr[0];
        arr = arr.slice(1)
    }
    for(let i=0; i< arr.length; i++){
        acc = callback(acc, arr[i], arr);
    };
    return acc;
};

function myFind(collection, predicate){
    const arr = makeArray(collection);
    for(let i = 0; i < arr.length; i++){
        if(predicate(arr[i])) return arr[i];
    }
    return undefined;
}

function myFilter(collection, predicate){
    const arr = makeArray(collection);
    const newArray = []
    for(let i = 0; i < arr.length; i++){
        if(predicate(arr[i])) newArray.push(arr[i]);
    }
    return newArray;
}

function mySize(collection){
    const arr = makeArray(collection);
    return arr.length
}

function myFirst(array, n = 1){
    if(n === 1) return array[0];
    return array.slice(0, n)
};

function myLast(array, n = 1){
    if(n === 1) return array[array.length -1];
    return array.slice(array.length - n)
};

function myKeys(obj){
    const keys = [];
    for (let key in obj){
        keys.push(key);
    }
    return keys;
};

function myValues(obj){
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
};


// console.log(myReduce([1, 2, 3], function(acc, val, collection) {return acc + val; }, 10))
// console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val}))

// myEach({1:1, 2:2}, (e)=>console.log(e))
// console.log(myMap([1, 2, 3], (n)=>n*3));
// console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }))

// console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
// console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }));

// console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
// console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }))
