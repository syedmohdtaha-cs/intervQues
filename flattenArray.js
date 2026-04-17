// Implement a function that flattens a nested array into a single-level array.

const flatten = (nestedArr) => {

    let flattenArr = [];
    const flat = (arr) => {

        for(let item of arr){
            console.log(item,"item inside flat")
           if(Array.isArray(item)){
              flat(item);
           }else{
            flattenArr.push(item)
           }
        }

        return flattenArr;
    }

    return flat(nestedArr);

}

console.log(flatten(["a",["b",["c",["1"]]],"d"]),"output");