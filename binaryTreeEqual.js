const binaryTreeEqual = (a,b) => {
    
    if(a === null && b=== null){
        return true;
    }else  if(a === null || b === null){
        return false;
    }else if(a.val !== b.val){
        return false;
    }

    return binaryTreeEqual(a.left,b.left) && binaryTreeEqual(a.right,b.right);
}