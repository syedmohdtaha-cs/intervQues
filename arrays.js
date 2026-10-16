const maxSubarray = (arr) => {

    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for(let i = 0; i < arr.length; i++){
       currentSum = Math.max(arr[i], currentSum + arr[i]);
       maxSum = Math.max(maxSum,currentSum)
    }

    return maxSum;
}


const twoSum = (arr,target) => {
    const map = new Map();

    for (let i = 0; i<arr.length; i++){
        const complement = target - arr[i];
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(arr[i],i)
    }
 return [];
}

const prefixSum = (arr,queries) => {
    let sumArr = []
    let prefix = [0];
      for(const item of arr){
        prefix.push(prefix[prefix.length - 1] + item)
      }
    for(const query of queries){
        const left = query[0];
        const right = query[1];
        sumArr.push(prefix[right + 1] - prefix[left]);
    }

    return sumArr;
}

console.log(twoSum([2, 7, 11, 15]
,9),"twosum")