function binarySearch(list, element) {  

    let l= 0;
    let k = list.length-1;
    while (l <= k){
        var mid = Math.round((k+l)/2);
        if (list[mid] === element){
            return mid;
        }
        else if (list[mid] < element){
            k = mid+1;
        }
        else{ 
            l = mid-1;
        }
    }
    return -1;
}

console.log(binarySearch([2,4,3,5,4,3,2,6,],3));
// Fixed the parentheses. 
